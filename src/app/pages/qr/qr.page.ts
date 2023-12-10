import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { FormControl,FormGroup,Validators,AbstractControl,ValidationErrors,} from '@angular/forms';
import { map } from 'rxjs/operators';
import { DataService } from './../../app.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { ModalController } from '@ionic/angular';
import { UtilsService } from 'src/app/services/utils.service';
import { ModalComponent } from 'src/app/components/modal/modal.component';
import { ViewWillEnter } from '@ionic/angular';
@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit, ViewWillEnter {


  ramos: any =[];
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService)
  constructor(
    private router: Router,
    private http: HttpClient,
    private dataService: DataService,
    private modalController : ModalController,
    ) 
    {}

    async ionViewWillEnter(){
      this.ramos = await this.firebaseSvc.getSubjects();
      console.log(this.ramos);
    }

  ngOnInit() {
    
  }

  getRamos(){
    return this.http
    .get("assets/files/ramos.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }

  doRefresh(event) {
    console.log('Iniciando operación async');
  
    setTimeout(() => {
      console.log('Operación async finalizada');
      this.ionViewWillEnter();
      event.target.complete();
    }, 2000);
  }

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }

  setCod(value: any) {
    this.dataService.setCodigoAsig(value);
  }

  onClickAndSetCod(ruta: string, value: any) {
    this.onClick(ruta); // Llama a la función onClick con la ruta
    this.setCod(value); // Llama a la función setCod con el valor que desees
  }

  async ModalAgregarAsignatura() {
    const modal = await this.modalController.create({
      component: ModalComponent,
      cssClass: 'add-asignatura-modal'
    });
  
    await modal.present();
  
    const { data } = await modal.onDidDismiss();
    if (data && data.event === 'asignaturaAgregada') {
      // Espera un breve momento antes de recargar los datos
      setTimeout(() => this.ionViewWillEnter(), 1000);
    }
  }
}

