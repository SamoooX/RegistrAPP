import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from './../../app.component';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  

  constructor(private router:Router,private alertController:AlertController,private dataService:DataService,) {

    this.loginForm = new FormGroup({
      'username': new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$') // Asegúrate de reemplazar esta expresión regular con la que necesitas
      ]),
      'password': new FormControl('', [
        Validators.required
      ])
    });
  }

  setPermission(value: boolean) {
    this.dataService.setPermission(value);
  }
  
  ngOnInit() {
  }
  onSubmit() {
    if (this.loginForm.valid) {
      
      this.router.navigate(['/home']);
    } else {
      this.presentAlert();
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
    await alert.present();
  }
}