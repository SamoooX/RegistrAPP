import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  nombreUsuario: string = 'Matias Aninir';
  correoElectronico: string = 'mat@duoc.cl';
  
  constructor() { }

  ngOnInit() {
  }
  editarPerfil() {
  }

  agregarFoto() {
  
  }

  editarFoto(){
    
  }
}
