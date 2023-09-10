import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private router:Router, private alertController:AlertController) { }

  usuario={
    username:"",
    password:"",
    
  }

  ngOnInit() {
  }
  onSubmit()
  {
    if (this.usuario.username=="mat@duoc.cl" && this.usuario.password=="123"){
      this.router.navigate(['/home'])
    }
    else{
      
      this.presentAlert()
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: "Usuario y/o password incorrectos",
      buttons: ['OK'],
      backdropDismiss:false,
      
    });
  }
}
