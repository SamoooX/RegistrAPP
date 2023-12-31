import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { User } from 'firebase/auth';
import { UtilsService } from 'src/app/services/utils.service';
import { DataService } from './../../app.component';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {
  //qr
  texto: any;
  //coordenadas
  ValidacionCoordenadas: boolean = true;
  //servicios
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(
    private alertController: AlertController,
    private dataService: DataService,
    private barcodescanner: BarcodeScanner) { }

  ngOnInit() {

    this.ValidacionCoordenadas = this.dataService.getActivaBoton();


  }

  async scan() {
    const loading = await this.utilsSvc.loading();
  
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
  
      await loading.present();
      // Guardar en Firebase
      this.firebaseSvc.addDocument('asistencia', asistenciaData).then(() => {
        // Los datos de asistencia se guardaron con éxito en Firebase
        // Cambiar el estado 'enviado' a true
        this.utilsSvc.saveInLocalStorage('asistencia', { data: asistenciaData, enviado: true });
      });
  
      this.utilsSvc.routerLink('tab/asistencia');
  
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
