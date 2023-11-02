import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  form : FormGroup;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {

    this.form= new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
      name: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });
  }

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {}

  async onSubmit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc.signUp(this.form.value as User).then(async res => {
     
        await this.firebaseSvc.updateUser(this.form.value.name);

          console.log(res);
        })
        .catch((error) => {
          console.log(error);

          this.presentAlert();
        })
        .finally(() => {
          loading.dismiss();
        });
    }
  }

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alerta',
      subHeader: 'Información',
      message: 'Valores no validos',
      buttons: ['OK'],
      backdropDismiss: false,
    });
    await alert.present();
  }
}
