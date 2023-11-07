import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Asignatura } from 'src/app/models/asignatura.model';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  ramos: any =[];
  asistencia: any=[];
  

  firebaseSvc = inject(FirebaseService);

  constructor(private http: HttpClient) { }
  
  async ngOnInit() {
    this.ramos = await this.firebaseSvc.getSubjects();
  
    // Crea un mapa de asistencias por ID de asignatura
    const asistenciasPorId = {};
    for (let ramo of this.ramos) {
      asistenciasPorId[ramo.id] = [];
    }
  
    // Llena el mapa con las asistencias correspondientes
    const todasAsistencias = await this.firebaseSvc.getAttendances();
    for (let asist of todasAsistencias) {
      const fecha = new Date(asist['fecha'].seconds * 1000);
      if (asistenciasPorId.hasOwnProperty(asist['idAsignatura'])) {
        asistenciasPorId[asist['idAsignatura']].push({
          ...asist,
          fecha: fecha
        });
      }
    }
  
    this.asistencia = asistenciasPorId;
  }
  
  getAsistenciasPorAsignatura(nombreAsignatura: string) {
    if (!this.asistencia.hasOwnProperty(nombreAsignatura)) {
      console.log('No se encontró el nombre de la asignatura en el mapa: ', nombreAsignatura);
      return [];
    }
  
    return this.asistencia[nombreAsignatura];
  }
  
}
