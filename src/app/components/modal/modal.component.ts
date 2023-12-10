import { Component, OnInit, inject } from '@angular/core';
import { FormControl,FormGroup,Validators,AbstractControl,ValidationErrors,} from '@angular/forms';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { v4 as uuidv4 } from 'uuid';
import { ModalController, NavController } from '@ionic/angular';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent  implements OnInit {

  formAsignatura:FormGroup;

  utilsSvc = inject(UtilsService)
  firebaseSvc = inject(FirebaseService)

  constructor(private navCtrl:NavController, private modalCtrl:ModalController) {
    this.formAsignatura = new FormGroup({
      id:new FormControl(''),
      nombre_asignatura: new FormControl('', Validators.required),
   });
  }
  ngOnInit() {}

  onSubmit(){

  }

  dismissModal(){
    this.utilsSvc.dismissModal();
  }

  async agregarAsignatura() {
    if (this.formAsignatura.valid) {
      const loading = await this.utilsSvc.loading();
      await loading.present();
  
      const asignaturas = {
        id: uuidv4(), // Esto genera un ID único usando la librería uuid
        nombre_asignatura: this.formAsignatura.get('nombre_asignatura').value,
      };
  
      this.firebaseSvc.addDocument('asignaturas', asignaturas)
        .then(() => {
          console.log('Asignatura agregada correctamente');
          this.dismissModal();


          this.modalCtrl.dismiss({
            'dismissed': true,
            'event': 'asignaturaAgregada'
          });
        })
        .catch((error) => {
          console.error('Error al agregar la asignatura: ', error);
        })
        .finally(() => {
          loading.dismiss();
          
        });
    }
  }
}
