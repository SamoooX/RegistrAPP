import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-datos',
  templateUrl: './editar-datos.page.html',
  styleUrls: ['./editar-datos.page.scss'],
})
export class EditarDatosPage implements OnInit {

  nombreUsuario: string = 'Matias Aninir';
  correoElectronico: string = 'mat@duoc.cl';
  usuario={
    password:"",
  }
  constructor(private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    this.router.navigate(['tab/perfil'])
  }
}
