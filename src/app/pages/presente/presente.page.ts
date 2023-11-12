import { Component, OnInit, inject } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation, Position } from '@capacitor/geolocation';
import { Capacitor } from '@capacitor/core';
import { AndroidSettings, IOSSettings, NativeSettings } from 'capacitor-native-settings';
import { LocationAccuracy } from '@awesome-cordova-plugins/location-accuracy/ngx';
import { FirebaseService } from 'src/app/services/firebase.service';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';
import { User } from 'firebase/auth';
import { UtilsService } from 'src/app/services/utils.service';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {
  //qr
  texto: any;
  //coordenadas
  ValidacionCoordenadas: boolean = false;
  //servicios
  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(
    private alertController: AlertController,
    private locationAccuracy: LocationAccuracy,
    private barcodescanner: BarcodeScanner) { }

  ngOnInit() {



  }

  async scan() {
    const loading = await this.utilsSvc.loading();
    await loading.present();

    this.barcodescanner.scan().then(async barcodedata => {
      console.log("Scaneando...", barcodedata);
      this.texto = (JSON.stringify(barcodedata));

      let user = this.user();
      let idAlumno = user.uid;

      const idAsignatura = barcodedata.text;

      const asistenciaData = {
        idAlumno,
        idAsignatura,
        fecha: new Date(),
        asistencia: true
      };

      // Guardar en Firebase
      this.firebaseSvc.addDocument('asistencia', asistenciaData);

      // Guardar en localStorage
      this.utilsSvc.saveInLocalStorage('asistencia', asistenciaData);

      

    }).catch(async err => {
      console.log("ERROR AL ESCANEAR!!!!");
      (await loading).dismiss();
    }).finally(() => {
      loading.dismiss();
    });

  }


  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }



  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Aviso',
      subHeader: 'La asistencia se ha registrado correctamente',
      message: '',
      buttons: ['OK'],
    });

    await alert.present();
  }

  async obtenerCoordenadas(options: PositionOptions) {
    try {
      const position: Position = await Geolocation.getCurrentPosition(options);
      console.log('Coordenadas:', position.coords);

      // Coordenadas del lugar de referencia(DUOC)
      const lugarLat = -36.79538077676426;
      const lugarLon = -73.06240811939503;

      const distancia = this.calcularDistancia(
        position.coords.latitude,
        position.coords.longitude,
        lugarLat,
        lugarLon
      );

      if (distancia < 0.25) {
        console.log('Las coordenadas están cerca del lugar.');
        this.ValidacionCoordenadas = true;
      } else {
        console.log('Las coordenadas no están cerca del lugar.');
        this.ValidacionCoordenadas = false;
      }
    } catch (error) {
      console.error('Error al obtener las coordenadas:', error);
    }
  }

  async getCurrentLocation() {
    try {
      const permissionStatus = await Geolocation.checkPermissions();
      console.log('Permission status: ', permissionStatus.location);
      if (permissionStatus?.location != 'granted') {
        const requestStatus = await Geolocation.requestPermissions();
        if (requestStatus.location != 'granted') {
          // go to location settings
          await this.openSettings(true);
          return;
        }
      }

      if (Capacitor.getPlatform() == 'android') {
        this.enableGps();
      }

      let options: PositionOptions = {
        maximumAge: 3000,
        timeout: 10000,
        enableHighAccuracy: true
      };
      await this.obtenerCoordenadas(options);
    } catch (e: any) {
      if (e?.message == 'Location services are not enabled') {
        await this.openSettings();
      }
      console.log(e);
    }
  }

  openSettings(app = false) {
    console.log('open settings...');
    return NativeSettings.open({
      optionAndroid: app ? AndroidSettings.ApplicationDetails : AndroidSettings.Location,
      optionIOS: app ? IOSSettings.App : IOSSettings.LocationServices
    });
  }

  async enableGps() {
    const canRequest = await this.locationAccuracy.canRequest();
    if (canRequest) {
      await this.locationAccuracy.request(this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY);
    }
  }

  calcularDistancia(lat1, lon1, lat2, lon2) {
    const R = 6371; // Radio de la Tierra en kilómetros
    const dLat = (lat2 - lat1) * (Math.PI / 180);
    const dLon = (lon2 - lon1) * (Math.PI / 180);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distancia = R * c; // Distancia en kilómetros
    return distancia;
  }



}
