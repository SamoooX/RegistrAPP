import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';
import { AndroidSettings, IOSSettings, NativeSettings } from 'capacitor-native-settings';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { User } from 'firebase/auth';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {
  //qr
  texto: any;
  //coordenadas
  ValidacionCoordenadas: boolean = false;
  //servicios
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(
    private alertController: AlertController,
    private locationAccuracy: LocationAccuracy,
    private barcodescanner: BarcodeScanner) { }

  ngOnInit() {



  }

  async scan() {
    const loading = await this.utilsSvc.loading();
    await loading.present();

    this.barcodescanner.scan().then(async barcodedata => {
      console.log("Scaneando...", barcodedata);
      this.texto = (JSON.stringify(barcodedata));

      let user = this.user();
      let idAlumno = user.uid;

      const idAsignatura = barcodedata.text;

      const asistenciaData = {
        idAlumno,
        idAsignatura,
        fecha: new Date(),
        asistencia: true
      };

      // Guardar en Firebase
      this.firebaseSvc.addDocument('asistencia', asistenciaData);

      // Guardar en localStorage
      this.utilsSvc.saveInLocalStorage('asistencia', asistenciaData);

      

    }).catch(async err => {
      console.log("ERROR AL ESCANEAR!!!!");
      (await loading).dismiss();
    }).finally(() => {
      loading.dismiss();
    });

  }


  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
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
