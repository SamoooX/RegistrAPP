import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'
import { User } from 'firebase/auth';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {

  texto:any;
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private alertController:AlertController, private barcodescanner: BarcodeScanner) { }

  ngOnInit() {

 

  }

  scan(){
    this.barcodescanner.scan().then(barcodedata=>{
      console.log("Scaneando...", barcodedata);
      this.texto=(JSON.stringify(barcodedata));
  
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
      
    }).catch(err=>{
      console.log("ERROR AL ESCANEAR!!!!");
    })
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
