import { Injectable, inject } from '@angular/core';
import { LoadingController, ToastController, ToastOptions } from '@ionic/angular';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  loadingCtrl = inject(LoadingController)
  toastCtrl = inject(ToastController)
  router = inject(Router);


  // Función loading

  loading(){
    return this.loadingCtrl.create({ spinner: 'crescent', duration : 5000})
  }


  // Función Toast 

  async presentToast(opts?: ToastOptions) {
    const toast = await this.toastCtrl.create(opts);
    toast.present();
  }

  // Funcion para redirigir

  routerLink(url: string){
    return this.router.navigateByUrl(url);
  }
  // Guardar datos localmente

  saveInLocalStorage(key: string, value: any){
    return localStorage.setItem(key, JSON.stringify(value));
  }

  // Obtener datos del localStorage

  getFromLocalStorage(key: string){
    return JSON.parse(localStorage.getItem(key));
  }
}
