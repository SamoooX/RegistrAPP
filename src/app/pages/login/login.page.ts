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
  const domain = email.substring(email.lastIndexOf('@') + 1);
  if (email === '' || domain.toLowerCase() === 'duocuc.cl' || domain.toLowerCase() === 'profesor.duoc.cl') {
    return null;
  } else {
    return { 'emailDomain': true };
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;

  constructor(
    private router: Router,
    private alertController: AlertController,
    private dataService: DataService
  ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        emailDomainValidator
      ]),
      password: new FormControl('', [Validators.required]),
    });
  }

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  setPermission(value: boolean) {
    this.dataService.setPermission(value);
  }

  ngOnInit() {}

  async onSubmit() {
    if (this.loginForm.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
  
      this.firebaseSvc.signIn(this.loginForm.value as User).then(res => {
          const email: string = this.loginForm.get('email').value;
          const domain = email.substring(email.lastIndexOf('@') + 1);
          if (domain.toLowerCase() === 'duocuc.cl') {
            this.dataService.setPermission(false); // Permiso para alumnos
          } else if (domain.toLowerCase() === 'profesor.duoc.cl') {
            this.dataService.setPermission(true); // Permiso para profesores
          }

// -----------------------Ruta---------------------------------------------------------------
          this.router.navigate(['tab/home']);
// --------------------------------------------------------------------------------------
          this.getUserInfo(res.user.uid);
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
      message: 'Usuario y/o password incorrectos',
      buttons: ['OK'],
      backdropDismiss: false,
    });
    await alert.present();
  }


  async getUserInfo(uid:string) {
    if (this.loginForm.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      let path = `users/${uid}`;

      this.firebaseSvc.getDocument(path).then(user => {
          
        this.utilsSvc.saveInLocalStorage('user', user)
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
}
