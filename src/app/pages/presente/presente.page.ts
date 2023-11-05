import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Geolocation, Position } from '@capacitor/geolocation';

@Component({
  selector: 'app-presente',
  templateUrl: './presente.page.html',
  styleUrls: ['./presente.page.scss'],
})
export class PresentePage implements OnInit {

  constructor(private alertController:AlertController) { }

  ngOnInit() {
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

  async obtenerCoordenadas() {
    try {
      const position: Position = await Geolocation.getCurrentPosition();
      console.log('Coordenadas:', position.coords);

      // Coordenadas del lugar de referencia(DUOC)
      const lugarLat = -33.467198085792575;
      const lugarLon = -70.64747337871752;

      const distancia = this.calcularDistancia(
        position.coords.latitude,
        position.coords.longitude,
        lugarLat,
        lugarLon
      );

      if (distancia < 0.15) {
        console.log('Las coordenadas están cerca del lugar.');
      } else {
        console.log('Las coordenadas no están cerca del lugar.');
      }
    } catch (error) {
      console.error('Error al obtener las coordenadas:', error);
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
