import { Component, inject } from '@angular/core';
import { Injectable } from '@angular/core';
import { UtilsService } from './services/utils.service';
import { FirebaseService } from './services/firebase.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  utilsSvc = inject(UtilsService);
  firebaseSvc = inject(FirebaseService);

  constructor() {}


  ngOnInit() {
      
    if(navigator.onLine) {
      // Si hay conexión a internet
      let asistenciaData = this.utilsSvc.getFromLocalStorage('asistencia');
      if(asistenciaData) {
        this.firebaseSvc.addDocument('asistencia', asistenciaData).then(() => {
          // Los datos de asistencia se guardaron con éxito en Firebase
          // eliminar los datos del localstorage
          this.utilsSvc.saveInLocalStorage('asistencia', null);
        });
      }
    }
  }
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private permission: boolean = false;
  private CodigoAsig: any;
  private activaBoton: any;

  getPermission() {
    return this.permission;
  }

  setPermission(value: boolean) {
    this.permission = value;
  }

  getCodigoAsig() {
    return this.CodigoAsig;
  }

  setCodigoAsig(value: any) {
    this.CodigoAsig = value;
  }

  getActivaBoton() {
    return this.activaBoton;
  }

  setActivaBoton(value: any) {
    this.activaBoton = value;
  }

}