import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {

  isLoading: boolean
  loading: any
  constructor(
    public loadingController: LoadingController
  ) { }

  async present(message) {
    this.loading = await this.loadingController.create({
      message,
    });
    this.isLoading = true
    await this.loading.present()
  }

  async dismiss() {
    this.loading.dismiss()
  }
}
