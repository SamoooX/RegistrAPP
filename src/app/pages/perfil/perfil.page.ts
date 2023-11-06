import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from './../../app.component';
import { FirebaseService } from 'src/app/services/firebase.service';
import { UtilsService } from 'src/app/services/utils.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {
  permission!: boolean;
  

  fireBaseSvc = inject(FirebaseService);
  utilsSvc = inject(UtilsService);

  constructor(
    private router:Router,
    private dataService: DataService) { }

  ngOnInit() {
    this.permission = this.dataService.getPermission();
  }

  user(): User {
    return this.utilsSvc.getFromLocalStorage('user');
  }

  editarPerfil() {
    this.router.navigate(['/editar-datos'])
  }

  
  agregarFoto() {
  
  }

  editarFoto(){

  }
  
  cerrarSesion(){
    this.fireBaseSvc.signOut();
  }
}
