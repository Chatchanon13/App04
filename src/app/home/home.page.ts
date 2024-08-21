import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private toastController: ToastController) {}

  async presentToast(position:'bottom') {
    const toast = await this.toastController.create({
      message: 'hello world',
      duration: 1500,
      position: position,
    });

    await toast.present();
  }

}
