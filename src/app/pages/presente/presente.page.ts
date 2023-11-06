import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Barcode, BarcodeScanner } from '@capacitor-mlkit/barcode-scanning';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {

  isSupported = false;
  barcodes: Barcode[] = [];
  firebaseSvc = inject(FirebaseService);

  constructor(private alertController:AlertController, ) { }

  ngOnInit() {

    BarcodeScanner.isSupported().then((result) => {
      this.isSupported = result.supported;
    });

  }

  async scan(): Promise<void> {
    const granted = await this.requestPermissions();
    if (!granted) {
      this.presentAlert();
      return;
    }
    const { barcodes } = await BarcodeScanner.scan();
    this.barcodes.push(...barcodes);

    for (const barcode of barcodes) {
      this.firebaseSvc.addDocument('asistencia', {
        codigo: barcode.rawValue,
        fecha: new Date()
      });
    }
  }

  async requestPermissions(): Promise<boolean> {
    const { camera } = await BarcodeScanner.requestPermissions();
    return camera === 'granted' || camera === 'limited';
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
