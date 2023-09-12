import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../app.component';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  permission!: boolean;
  nombreUsuario: string = 'Matias Aninir';
  correoElectronico: string = 'mat@duoc.cl';
  
  constructor(
    private router:Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.permission = this.dataService.getPermission();
  }
  editarPerfil() {
    this.router.navigate(['/editar-datos'])
  }

  agregarFoto() {
  
  }

  editarFoto(){

  }
  
  cerrarSesion(){
    this.router.navigate(['/login'])
  }
}
