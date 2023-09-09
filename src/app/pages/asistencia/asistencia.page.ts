import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage implements OnInit {

  ramos: any =[];
  asistencia: any=[];

  constructor(private http: HttpClient) { }
  
  ngOnInit() {
    this.getRamos().subscribe(res=>{
      console.log("Res", res)
      this.ramos = res;
    });
    this.getAsistencia().subscribe(res=>{
      console.log("Res", res)
      this.asistencia = res;
    });
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

  getAsistencia(){
    return this.http
    .get("assets/files/asistencia.json")
    .pipe(
      map((res:any) => {
        return res.data;
      })
    )
  }
}
