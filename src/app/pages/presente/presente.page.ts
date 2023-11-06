import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { FirebaseService } from 'src/app/services/firebase.service';
import {BarcodeScanner} from '@awesome-cordova-plugins/barcode-scanner/ngx'

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {

  texto:any;
  firebaseSvc = inject(FirebaseService);

  constructor(private alertController:AlertController, private barcodescanner: BarcodeScanner) { }

  ngOnInit() {

 

  }

  scan(){
    this.barcodescanner.scan().then(barcodedata=>{
      console.log("Scaneando...", barcodedata);
      this.texto=(JSON.stringify(barcodedata));

      const [idAlumno, idAsignatura] = barcodedata.text.split('-');

      this.firebaseSvc.addDocument('asistencia', {
        idAlumno,
        idAsignatura,
        fecha: new Date(),
        asistencia: true
      });
      
    }).catch(err=>{
      console.log("ERROR AL ESCANEAR!!!!");
    })

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
