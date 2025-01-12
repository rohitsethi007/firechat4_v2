import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  private loading;

  constructor(
    private loadingCtrl: LoadingController,
    private toastCtrl: ToastController
  ) { }

  show() {
    if (!this.loading) {
      this.loadingCtrl.create({ spinner: 'circles', duration: 2000 }).then(res => {
        this.loading = res;
        this.loading.present();
      })
    }

  }
  hide() {
    if (this.loading) {
      this.loading.dismiss();
      this.loading = null;
    }
  }

  async showToast(message) {
    const toast = await this.toastCtrl.create({
      message,
      duration: 3000,
      position: 'top',
      animated: true,
      color: 'primary', // changed from secondary to primary
      cssClass: 'custom-toast',
      mode: 'ios'
    });
    toast.present();
  }
  
}
