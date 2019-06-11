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
      { val: 'Show notification when watering', isChecked: true },
      { val: 'Test the system', isChecked: false }
    ];

    async presentToast(msg) {
    const toast = await this.toastController.create({
      header: 'BonsaiBot says:',
      message: msg,
      position: 'middle',
      color: 'success',
      duration: 3500
    });
    toast.present();
  }


}
