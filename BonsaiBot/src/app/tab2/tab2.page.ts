import { Component } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public toastController: ToastController, public alertController: AlertController) {}

    public form = [
      { val: 'Show notification when watering', isChecked: true },
      { val: 'Test the system', isChecked: false }
    ];

    async presentToast(msg) {
    const toast = await this.toastController.create({
      header: 'BonsaiBot says:',
      message: msg,
      position: 'middle',
      showCloseButton: true,
      color: 'success',
      duration: 3500
    });
    toast.present();
  }

  async presentAlert(header, sub, msg) {
  const alert = await this.alertController.create({
    header: header,
    subHeader: sub,
    message: msg,
    buttons: ['OK']
  });

  await alert.present();
}

async doTest() {
  this.presentAlert('Testprocedure', '', 'A testsignal should now be visible for 5 seconds on your watering device.');
  /*
  * Do testing stuff here.
  */
}

async doWater() {
  this.presentAlert('Watering','has been initialized.','Congrats! Your plant is receiving some fresh water about now.');
  
}


}
