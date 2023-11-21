import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { FirebaseService } from 'src/app/services/firebase.service';
import { Asignatura } from 'src/app/models/asignatura.model';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/models/user.model';


@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  ramos: any =[];
  asistencia: any=[];
  

  firebaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(private http: HttpClient) { }
  
  async ngOnInit() {
    this.loadData();
  }

  async ionViewWillEnter() {
    this.loadData();
  }
  
  async loadData() {
    this.ramos = await this.firebaseSvc.getSubjects();
  
    // Crea un mapa de asistencias por ID de asignatura
    const asistenciasPorId = {};
    for (let ramo of this.ramos) {
      asistenciasPorId[ramo.id] = [];
    }
  
    // Obtén el ID
    let user = this.user();
    let idAlumnoLogueado = user.uid;  
  
    // Llena el mapa con las asistencias correspondientes
    const todasAsistencias = await this.firebaseSvc.getAttendances();
    for (let asist of todasAsistencias) {
      const fecha = new Date(asist['fecha'].seconds * 1000);
      if (asistenciasPorId.hasOwnProperty(asist['idAsignatura']) && asist['idAlumno'] === idAlumnoLogueado) {
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
<<<<<<< HEAD
  
=======

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

<<<<<<< HEAD
}
=======
>>>>>>> e49c578369d74fad05f787acc0eed81b0f4890db
}
>>>>>>> 471e95bba005e1215989e08e8edaf018dafde2fe
