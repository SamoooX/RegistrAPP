import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FormControl,FormGroup,Validators,AbstractControl,ValidationErrors,} from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { User } from 'src/app/models/user.model';
import { UtilsService } from 'src/app/services/utils.service';

function emailDomainValidator(control: AbstractControl): { [key: string]: any } | null {
  const email: string = control.value;
  const domain = email.substring(email.lastIndexOf('@') + 1);
  if (
    email === '' ||
    domain.toLowerCase() === 'duocuc.cl' ||
    domain.toLowerCase() === 'profesor.duoc.cl'
  ) {
    return null;
  } else {
    return { emailDomain: true };
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  
  form: FormGroup;

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    this.form = new FormGroup(
      {
        email: new FormControl('', [Validators.required,Validators.email,emailDomainValidator,]),
        password: new FormControl('', [Validators.required,Validators.minLength(8),]),
        password2: new FormControl('', [Validators.required,Validators.minLength(8),]),
        name: new FormControl('', [Validators.required,Validators.minLength(6),]),
      },
      { validators: this.MustMatch('password', 'password2') }
    );
  }

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  ngOnInit() {}

  async onSubmit() {
    if (this.form.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();

      this.firebaseSvc
        .signUp(this.form.value as User)
        .then(async (res) => {
          await this.firebaseSvc.updateUser(this.form.value.name);
          this.router.navigate(['/login']);
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

  MustMatch(controlName: string, matchingControlName: string) {
    return (formGroup: FormGroup): ValidationErrors | null => {
      const control = formGroup.controls[controlName];
      const matchingControl = formGroup.controls[matchingControlName];

      if (control.value !== matchingControl.value) {
        return { mustMatch: true };
      } else {
        return null;
      }
    };
  }
}
