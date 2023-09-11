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
      password:"",
      password2:"",
    }
  ngOnInit() {
  }
  onSubmit()
  {
    if (this.usuario.password=="123" && this.usuario.password2=="123"){
      this.router.navigate(['/login'])
    }
    else{
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Las contraseñas no coinciden",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });
    await alert.present();
  }
}
