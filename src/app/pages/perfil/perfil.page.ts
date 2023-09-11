import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombreUsuario: string = 'Matias Aninir';
  correoElectronico: string = 'mat@duoc.cl';
  
  constructor(private router:Router) { }

  ngOnInit() {
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
