import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  constructor(private router:Router, private alertController:AlertController) { }

    usuario={
      email:"",
    }
  ngOnInit() {
  }
  onSubmit()
  {
    if (this.usuario.email== "mat@duoc.cl"){
      this.aviso()
    }
    else{
      this.presentAlert()
    }
  }

  async aviso() {
    const alert = await this.alertController.create({
      header: 'Informe',
      subHeader: 'Información',
      message: "Se le ha enviado un correo para el cambio de contraseña",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });
    await alert.present();
  }


  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Datos incorrectos",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });
    await alert.present();
  }
}
