import { Component, OnInit } from '@angular/core';
import { DataService } from './../../app.component';

@Component({
  selector: 'app-gqr',
  templateUrl: './gqr.page.html',
  styleUrls: ['./gqr.page.scss'],
})
export class GqrPage implements OnInit {
  codigo: any;
  constructor(private dataService: DataService) { 
    this.codigo = this.dataService.getCodigoAsig();
  }

  generarCodigoUnico(): string {
    const fechaActual = new Date();
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let codigoUnico = fechaActual.toISOString()+'___';
  
    for (let i = 0; i < 16; i++) {
      const caracterAleatorio = caracteres.charAt(Math.floor(Math.random() * caracteres.length));
      codigoUnico += caracterAleatorio;
    }
  
    return codigoUnico;
  }

  ngOnInit() {
  }

}