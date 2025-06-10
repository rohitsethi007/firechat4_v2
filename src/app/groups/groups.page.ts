import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { LoadingService } from '../services/loading.service';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';
import { register } from 'swiper/element/bundle';
import { AlertController, IonicSlides } from '@ionic/angular';
import firebase from 'firebase/compat/app';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Swiper } from 'swiper';

// Register Swiper custom elements
register();

@Component({
  selector: 'app-groups',
  templateUrl: './groups.page.html',
  styleUrls: ['./groups.page.scss', './groups.shell.scss'],
})
export class GroupsPage implements OnInit, AfterViewInit {
  @ViewChild('swiper') swiperRef: ElementRef | undefined;
  swiper?: Swiper;
  groups: any[] = [];
  filteredGroups: any[] = []; // Add this for search functionality
  searchTerm: string = ''; // Add this for search functionality
  searchGroup: any;
  categories: any = [];
  updateDateTime: any;
  unreadMessagesCount: any;
  loggedInUserId: any;
  slideOpts = {
    slidesPerView: 3,
    spaceBetween: 10,
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 10
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 15
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 20
      }
    }
  };


  constructor(
    private afAuth: AngularFireAuth,
    private router: Router,
    public dataProvider: DataService,
    public loadingProvider: LoadingService,
    private firestore: AngularFirestore,
    private alertController: AlertController,
  ) {}

  ngAfterViewInit() {
    setTimeout(() => {
      // Configure Swiper
      const swiperEl = this.swiperRef?.nativeElement;
      if (swiperEl) {
        const swiperParams = {
          slidesPerView: 3,
          spaceBetween: 20,
          grabCursor: true,
          navigation: true,
          pagination: {
            clickable: true
          },
          // Add these parameters for browser testing
          simulateTouch: true,
          mousewheel: true,
          keyboard: true,
          breakpoints: {
            320: {
              slidesPerView: 2,
              spaceBetween: 10
            },
            480: {
              slidesPerView: 3,
              spaceBetween: 15
            },
            640: {
              slidesPerView: 4,
              spaceBetween: 20
            }
          }
        };

        // Assign parameters to Swiper element
        Object.assign(swiperEl, swiperParams);
        
        // Initialize swiper
        swiperEl.initialize();
      }
    }, 300);
  }
  prevSlide() {
    const swiperEl = this.swiperRef?.nativeElement;
    swiperEl?.swiper.slidePrev();
  }

  nextSlide() {
    const swiperEl = this.swiperRef?.nativeElement;
    swiperEl?.swiper.slideNext();
  }
  ionViewWillEnter() {
    setTimeout(() => {
      const swiperEl = this.swiperRef?.nativeElement;
      if (swiperEl && swiperEl.swiper) {
        swiperEl.swiper.update();
      }
    }, 300);

    this.afAuth.currentUser.then(user => {
      this.loggedInUserId = user?.uid;
      // Initialize
      this.searchGroup = '';
      this.loadingProvider.show();
      this.loadAllCategories();
      
      // First get the user's groups
      this.dataProvider.getCurrentUser().then((userRef) => {
        userRef.get().subscribe((userData: any) => {
          const userGroups = userData.data()?.groups || [];
          console.log('User is member of groups:', userGroups);
          
          // Get all groups
          this.dataProvider.getGroups().snapshotChanges().subscribe((groups: any) => {
            this.groups = [];
            groups.forEach(element => {
              let group = element.payload.doc.data();
              group.key = element.payload.doc.id;
              
              // Check if the user is a member using the user's groups array
              if (Array.isArray(userGroups) && userGroups.includes(group.key)) {
                group.isUserMember = true;
              } else {
                // Double-check with the group's members array as a fallback
                if (group.members && Array.isArray(group.members) && group.members.includes(this.loggedInUserId)) {
                  group.isUserMember = true;
                } else {
                  group.isUserMember = false;
                }
              }
              this.groups.push(group);
            });
            this.filteredGroups = this.groups; // Initialize filtered groups
            this.loadingProvider.hide(); // Hide loading after groups are loaded
            
            // Update swiper after data is loaded
            setTimeout(() => {
              const swiperEl = this.swiperRef?.nativeElement;
              if (swiperEl && swiperEl.swiper) {
                swiperEl.swiper.update();
              }
            }, 300);
          });
        });
      });
    });
  }

  ngOnInit() {}
  
  // Add this new method for search functionality
  filterGroups() {
    if (!this.searchTerm?.trim()) {
      this.filteredGroups = this.groups;
      return;
    }

    const searchTermLower = this.searchTerm.toLowerCase().trim();
    this.filteredGroups = this.groups.filter(group => {
      return (
        group.name.toLowerCase().includes(searchTermLower) ||
        (group.description && group.description.toLowerCase().includes(searchTermLower))
      );
    });
  }

  loadAllCategories() {
    this.firestore.collection('categories').ref.orderBy('sort', 'asc').onSnapshot((catsRes: any) => {
      if (catsRes) {
        this.categories = [];
        catsRes.forEach(cat => {
          let category = cat.data();
          category.key = cat.id;
          this.categories.push(category);
        });
      }
    });
  }

 
  searchGroupByCategory(category) {
    const groupSearch = {category};
    // this.router.navigateByUrl('group-search/' + groupSearch);
    this.router.navigateByUrl('/group-search', { state: groupSearch });
    // this.router.navigateByUrl(['group-search', {state: {data: {category}}});
  }

  joinGroup(groupId) {
    // Check if user is already a member of this group
    const group = this.groups.find(g => g.key === groupId);
    if (group && group.isUserMember) {
      // User is already a member, just navigate to the group
      this.router.navigateByUrl('groupinfo/' + groupId);
    } else {
      // User is not a member, navigate to join page
      this.router.navigateByUrl('group-join/' + groupId);
    }
  }
  async confirmLeaveGroup(group: any) {
    // Count how many groups the user is a member of
    const userGroups = this.groups.filter(g => g.isUserMember);
    
    // If user is only in one group, don't allow leaving
    if (userGroups.length <= 1) {
      const alert = await this.alertController.create({
        header: 'Cannot Leave Group',
        message: 'You must be a member of at least one group. Please join another group before leaving this one.',
        buttons: ['OK'],
        cssClass: 'custom-alert'
      });
      
      await alert.present();
      return;
    }
    
    // Otherwise show the normal leave confirmation
    const alert = await this.alertController.create({
      header: 'Leave Group',
      message: 'Are you sure you want to leave this group? Your posts will remain in the group but you will no longer have access to group content.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary'
        },
        {
          text: 'Leave Group',
          role: 'destructive',
          handler: () => {
            this.leaveGroup(group);
          }
        }
      ],
      cssClass: 'custom-alert'
    });

    await alert.present();
  }

  leaveGroup(group: any) {
    this.loadingProvider.show();
    
    // Remove user from group members
    const updatedMembers = group.members.filter(memberId => memberId !== this.loggedInUserId);
    
    // Create a batch write to update both documents
    const batch = this.firestore.firestore.batch();
    
    // Reference to group document
    const groupRef = this.firestore.collection('groups').doc(group.key).ref;
    
    // Reference to user's account document
    const userRef = this.firestore.collection('accounts').doc(this.loggedInUserId).ref;
    
    // Update group members
    batch.update(groupRef, { members: updatedMembers });
    
    // Update user's groups array using arrayRemove
    batch.update(userRef, {
      groups: firebase.firestore.FieldValue.arrayRemove(group.key)
    });
  
    // Commit the batch
    batch.commit()
      .then(() => {
        // Reload the groups to refresh the UI
        this.ionViewWillEnter();
        
        // Show success message
        this.loadingProvider.showToast('You have left the group');
      })
      .catch(error => {
        console.error('Error leaving group:', error);
        this.loadingProvider.showToast('Error leaving group. Please try again.');
        this.loadingProvider.hide();
      });
  }
  
}
