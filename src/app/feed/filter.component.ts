// filter.component.ts
import { Component } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { PopoverController } from '@ionic/angular';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-filter',
  template: `
    <div class="filter-container">
      <!-- Header -->
      <div class="filter-header">
        <h4>Filter Content</h4>
        <ion-button fill="clear" size="small" (click)="resetFilters()" 
                    [disabled]="!hasActiveFilters()">
          <ion-icon slot="start" name="refresh-outline"></ion-icon>
          Reset
        </ion-button>
      </div>

      <!-- Content Type Section -->
        <!-- In your filter chips section -->
        <div class="filter-chips content-types">
        <div class="filter-chip" 
            [class.active]="selectedTypes.includes('all')"
            (click)="selectFilter('all')">
            <ion-icon name="apps-outline"></ion-icon>
            <span>All</span>
        </div>
        
        <div class="filter-chip" 
            [class.active]="selectedTypes.includes('posts')"
            (click)="selectFilter('posts')">
            <ion-icon name="newspaper-outline"></ion-icon>
            <span>Posts</span>
        </div>
        
        <div class="filter-chip" 
            [class.active]="selectedTypes.includes('events')"
            (click)="selectFilter('events')">
            <ion-icon name="calendar-outline"></ion-icon>
            <span>Events</span>
        </div>
        
        <div class="filter-chip" 
            [class.active]="selectedTypes.includes('resources')"
            (click)="selectFilter('resources')">
            <ion-icon name="document-outline"></ion-icon>
            <span>Resources</span>
        </div>
        </div>

        <br/>
      <!-- Groups Section -->
      <div class="filter-section">
        <div class="section-header">
          <span class="title">Groups</span>
          <span class="subtitle" *ngIf="getSelectedGroupsCount() > 0">
            {{getSelectedGroupsCount()}} selected
          </span>
        </div>
        
        <!-- Search Groups -->
        <div class="group-search">
          <ion-searchbar placeholder="Search groups" 
                        mode="ios"
                        [(ngModel)]="groupSearchTerm"
                        (ionInput)="filterGroups($event)"
                        (ionClear)="onSearchClear()"
                        class="group-searchbar">
          </ion-searchbar>
        </div>

        <!-- Groups Grid -->
        <div class="group-chips" [class.has-search]="groupSearchTerm">
        <div class="filter-chip" 
            *ngFor="let group of filteredGroups"
            [class.active]="group.selected"
            (click)="toggleGroup(group)">
            <div class="group-icon" 
                [style.background-color]="!group.imageUrl ? group.color : 'transparent'">
            <img *ngIf="group.img" [src]="group.img" [alt]="group.name">
            <span *ngIf="!group.img">{{group.name.charAt(0)}}</span>
            </div>
            <span class="group-name">{{group.name}}</span>
            <ion-icon name="checkmark" 
                    class="check-icon"
                    *ngIf="group.selected">
            </ion-icon>
        </div>
        </div>

      </div>

      <!-- Apply Button -->
      <div class="filter-actions">
        <ion-button expand="block" 
                    (click)="applyFilters()"
                    [disabled]="!hasActiveFilters()">
          Apply Filters
        </ion-button>
      </div>
    </div>
  `,
  styles: [`
    .filter-container {
      padding: 20px;
      width: 320px;
      max-width: 100%;
    }

    .filter-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 20px;

      h4 {
        margin: 0;
        font-size: 16px;
        font-weight: 600;
      }

      ion-button {
        height: 32px;
        --padding-start: 8px;
        --padding-end: 8px;
        font-size: 10px;
        --color: var(--ion-color-medium);
        
        &:disabled {
          opacity: 0.5;
        }

        ion-icon {
          font-size: 16px;
        }
      }
    }

    .filter-section {
      margin-bottom: 24px;

      .section-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 12px;

        .title {
          font-size: 14px;
          font-weight: 600;
          color: var(--ion-color-dark);
        }

        .subtitle {
          font-size: 12px;
          color: var(--ion-color-primary);
          font-weight: 500;
        }
      }
    }

    .content-types {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 8px;

      .filter-chip {
        aspect-ratio: 1;
        padding: 12px 8px;
        
        ion-icon {
          font-size: 20px;
          margin-bottom: 6px;
        }
      }
    }

    .group-search {
      margin-bottom: 12px;

      .group-searchbar {
        padding: 0;
        --box-shadow: none;
        --background: var(--ion-color-light);
        --border-radius: 8px;
        --placeholder-opacity: 0.5;
        --placeholder-color: var(--ion-color-medium);
        
        .searchbar-input {
          font-size: 14px;
        }
      }
    }

.group-chips {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8px;
  max-height: 200px;
  overflow-y: auto;
  padding-right: 4px;

  &.has-search {
    max-height: 150px;
  }

  .filter-chip {
    padding: 10px;
    position: relative;
    background: var(--ion-color-light);
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.2s ease;

    &.active {
      background: var(--ion-color-primary);
      
      .group-icon {
        background: rgba(255, 255, 255, 0.2) !important;
        
        span {
          color: white;
        }
      }

      .group-name {
        color: white;
      }
    }

    .group-icon {
      width: 28px;
      height: 28px;
      border-radius: 6px;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 4px;
      overflow: hidden; // Added for image containment

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        border-radius: 6px;
      }

      span {
        font-weight: 600;
        font-size: 14px;
        color: var(--ion-color-dark);
      }
    }

    .group-name {
      font-size: 13px;
      color: var(--ion-color-dark);
      text-align: center;
      line-height: 1.2;
      display: block;
      width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .check-icon {
      position: absolute;
      top: 4px;
      right: 4px;
      font-size: 16px;
      color: white;
    }

    &:hover {
      opacity: 0.9;
    }

    &:active {
      transform: scale(0.98);
    }
  }
}


    .filter-chip {
      background: var(--ion-color-light);
      border-radius: 8px;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 4px;
      cursor: pointer;
      transition: all 0.2s ease;
      position: relative;
      overflow: hidden;

      &.active {
        background: var(--ion-color-primary);
        
        ion-icon, span {
          color: white;
        }

        .group-icon {
          background: rgba(255, 255, 255, 0.2) !important;
          color: white !important;
        }

        .group-name {
          color: white !important;
        }
      }

      .group-icon {
        width: 28px;
        height: 28px;
        border-radius: 6px;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 600;
        font-size: 14px;
        color: var(--ion-color-dark);
        margin-bottom: 4px;
      }

      .group-name {
        font-size: 13px;
        color: var(--ion-color-dark);
        text-align: center;
        line-height: 1.2;
      }

      .check-icon {
        position: absolute;
        top: 4px;
        right: 4px;
        font-size: 16px;
        color: white;
      }

      &:hover {
        transform: translateY(-1px);
        box-shadow: 0 2px 8px rgba(0,0,0,0.1);
      }

      &:active {
        transform: translateY(0);
      }
    }

    .filter-actions {
      margin-top: 8px;
      
      ion-button {
        margin: 0;
        --border-radius: 8px;
        height: 44px;
        font-weight: 500;
        
        &:disabled {
          --background: var(--ion-color-medium);
          opacity: 0.5;
        }
      }
    }
    .filter-chips.content-types {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 8px;

  .filter-chip {
    padding: 8px 4px; // Reduced padding
    
    ion-icon {
      font-size: 20px; // Slightly smaller icon
      margin-bottom: 2px; // Reduced spacing between icon and text
    }

    span {
      font-size: 11px; // Smaller text
      font-weight: 500; // Medium weight for better readability at small size
      line-height: 1;
      text-align: center;
      -webkit-transform: translate3d(0,0,0);
      letter-spacing: -0.2px;
    }
  }
}


    // Dark mode adjustments
    @media (prefers-color-scheme: dark) {
      .filter-chip {
        background: rgba(var(--ion-color-light-rgb), 0.1);

        &.active {
          background: var(--ion-color-primary);
        }

        .group-name {
          color: var(--ion-color-light);
        }

        .group-icon {
          color: var(--ion-color-light);
        }
      }

      .group-searchbar {
        --background: rgba(var(--ion-color-light-rgb), 0.1) !important;
      }
    }
  `]
})
export class FilterComponent {
  selectedTypes: string[] = ['all'];
  groupSearchTerm: string = '';
  groups: any[] = [];
//   groups = [
//     { id: 1, name: 'Music', selected: false, color: '#FF6B6B' },
//     { id: 2, name: 'Sports', selected: false, color: '#4ECDC4' },
//     { id: 3, name: 'Technology', selected: false, color: '#45B7D1' },
//     { id: 4, name: 'Art & Design', selected: false, color: '#96CEB4' },
//     { id: 5, name: 'Gaming', selected: false, color: '#FFEEAD' },
//     { id: 6, name: 'Travel', selected: false, color: '#D4A5A5' },
//     { id: 7, name: 'Photography', selected: false, color: '#9B89B3' },
//     { id: 8, name: 'Food & Cooking', selected: false, color: '#FF9999' }
//   ];
  filteredGroups = [...this.groups];
  private loggedInUserId: any;
  constructor(private popoverCtrl: 
    PopoverController, 
    private afAuth: AngularFireAuth,
    public dataProvider: DataService,
  ) {}

  ionViewWillEnter() {
    console.log('Entering feed view');
    
    this.afAuth.currentUser.then(user => {
        this.loggedInUserId = user?.uid;

      // Get groups
      this.dataProvider.getGroups().snapshotChanges().subscribe((groups: any) => {
        this.groups = [];
        groups.forEach(element => {
          let group = element.payload.doc.data();
          group.key = element.payload.doc.id;
     
          if (group.members.some(e => e === this.loggedInUserId )) {
            group.isUserMember = true;
          } else {
            group.isUserMember = false;
          }
          this.groups.push(group);
        });
        this.filteredGroups = this.groups; // Initialize filtered groups
      });
      });
  }

  filterGroups(event?: any) {
    if (event && event.target.value === '')
        this.groupSearchTerm = ''
    if (!this.groupSearchTerm) {
      this.filteredGroups = [...this.groups];
      return;
    }
    
    const searchTerm = this.groupSearchTerm.toLowerCase();
    this.filteredGroups = this.groups.filter(group => 
      group.name.toLowerCase().includes(searchTerm)
    );
  }

  onSearchClear() {
    this.groupSearchTerm = ''
    this.filterGroups()
  }

  selectFilter(type: string) {
    if (type === 'all') {
        // If 'all' is selected, clear other selections
        this.selectedTypes = ['all'];
        return;
      }
    
      // Remove 'all' if it exists when selecting other types
      this.selectedTypes = this.selectedTypes.filter(t => t !== 'all');
    
      // Toggle the selected type
      if (this.selectedTypes.includes(type)) {
        this.selectedTypes = this.selectedTypes.filter(t => t !== type);
        // If no types selected, default back to 'all'
        if (this.selectedTypes.length === 0) {
          this.selectedTypes = ['all'];
        }
      } else {
        this.selectedTypes.push(type);
      }
  }

  toggleGroup(group: any) {
    group.selected = !group.selected;
  }

  getSelectedGroupsCount(): number {
    return this.groups.filter(g => g.selected).length;
  }

  hasActiveFilters(): boolean {
    return (this.selectedTypes.length > 1 || 
        (this.selectedTypes.length === 1 && this.selectedTypes[0] !== 'all')) || 
        this.getSelectedGroupsCount() > 0;
  }

  resetFilters() {
    this.selectedTypes = ['all'];
    this.groups.forEach(g => g.selected = false);
    this.groupSearchTerm = '';
    this.filterGroups();
  }

  applyFilters() {
    const selectedGroups = this.groups
    .filter(g => g.selected)
    .map(g => ({ id: g.id, name: g.name }));

    this.popoverCtrl.dismiss({
        types: this.selectedTypes,
        groups: selectedGroups
    });
  }
}
