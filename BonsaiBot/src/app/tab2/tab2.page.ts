import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController) {}

    public form = [
      { val: 'Show notification when ', isChecked: true },
      { val: 'Test', isChecked: false },
      { val: 'Do a Test spray right away.', isChecked: false }
    ];

    async presentToast(msg) {
    const toast = await this.toastController.create({
      message: msg,
      color: 'dark',
      duration: 3500
    });
    toast.present();
  }


}
