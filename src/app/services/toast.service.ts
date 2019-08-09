import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  toast: any = null;
  constructor(
    public toastController: ToastController
  ) {}

  async present(message: string) {
    if (this.toast) {
      this.dismiss()
    }
    this.toast = await this.toastController.create({
      message: message,
      showCloseButton: true,
    });
    this.toast.present();
  }

  dismiss() {
    this.toast.dismiss()
  }

}
