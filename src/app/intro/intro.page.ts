import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss']
})
export class IntroPage {
  currentSlide = 0;

  constructor(
    private router: Router,
    private storage: Storage
  ) {
    this.initStorage();
  }

  async initStorage() {
    await this.storage.create();
  }

  nextSlide() {
    if (this.currentSlide < 3) {
      this.currentSlide++;
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
  }

  async goToLogin() {
    await this.storage.set('introCompleted', true);
    this.router.navigate(['/login']);
  }

  async goToRegister() {
    await this.storage.set('introCompleted', true);
    this.router.navigate(['/register']);
  }
}