import { Component, OnInit, AfterViewInit, ViewChild, HostBinding } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { IonSlides, MenuController } from '@ionic/angular';

@Component({
  selector: 'app-getting-started',
  templateUrl: './getting-started.page.html',
  styleUrls: [
    './styles/getting-started.page.scss',
    './styles/getting-started.shell.scss',
    './styles/getting-started.responsive.scss'
  ]
})
export class GettingStartedPage implements OnInit, AfterViewInit {
  @ViewChild(IonSlides, { static: true }) slides: IonSlides;
  @HostBinding('class.last-slide-active') isLastSlide = false;

  gettingStartedForm: FormGroup;

  constructor(public menu: MenuController, public router: Router) {
    this.gettingStartedForm = new FormGroup({
      browsingCategory: new FormControl('men'),
      followingInterests: new FormGroup({
        tops: new FormControl(),
        dresses: new FormControl(),
        jeans: new FormControl(),
        jackets: new FormControl(),
        shoes: new FormControl(),
        glasses: new FormControl()
      })
    });
  }

  ngOnInit(): void {
    this.menu.enable(false);
  }

  goSignUp(){
    console.log(this.gettingStartedForm.get('followingInterests'));
    let navigationExtras: NavigationExtras = {
      state: {
        followingGroups: this.gettingStartedForm.get('followingInterests').value
      }
    };
    this.router.navigate(['/register'], navigationExtras);

  }
  ngAfterViewInit(): void {
    // ViewChild is set
    this.slides.isEnd().then(isEnd => {
      this.isLastSlide = isEnd;
    });

    // Subscribe to changes
    this.slides.ionSlideWillChange.subscribe(changes => {
      this.slides.isEnd().then(isEnd => {
        this.isLastSlide = isEnd;
      });
    });
  }
}
