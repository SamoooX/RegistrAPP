import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'La asistencia se ha registrado correctamente',
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
  }
}
