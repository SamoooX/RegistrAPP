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
    console.log(this.ramos);
    console.log(this.asistencia);
  }
  
  async asis(idAlumno: any, idAsis: any) {
    this.asistencia = (await this.firebaseSvc.getAsistencia(idAlumno, idAsis)).map(asist => {
      const fecha = new Date(asist['fecha'].seconds * 1000);
      return {
        ...asist,
        fecha: fecha
      };
    });
  }
  
}
