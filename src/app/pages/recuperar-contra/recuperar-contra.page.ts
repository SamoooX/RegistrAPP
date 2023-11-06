import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormControl, FormGroup, Validators, AbstractControl } from '@angular/forms';
import { DataService } from './../../app.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

function emailDomainValidator(control: AbstractControl): { [key: string]: any } | null {
  const email: string = control.value;
  if (email === null) {
    return null; // o manejarlo de acuerdo a tus requerimientos
  }
  const domain = email.substring(email.lastIndexOf('@') + 1);
  if (email === '' || domain.toLowerCase() === 'duocuc.cl' || domain.toLowerCase() === 'profesor.duoc.cl') {
    return null;
  } else {
    return { 'emailDomain': true };
  }
}


@Component({
  selector: 'app-recuperar-contra',
  templateUrl: './recuperar-contra.page.html',
  styleUrls: ['./recuperar-contra.page.scss'],
})
export class RecuperarContraPage implements OnInit {

  form: FormGroup;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dataService: DataService
  ) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email,emailDomainValidator]),
    });
  }

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  setPermission(value: boolean) {
    this.dataService.setPermission(value);
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
  
      this.firebaseSvc.sendRecoveryEmail(this.form.value.email).then(res => {

        this.aviso();
        this.form.reset();
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



