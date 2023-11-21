import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataService } from './../../app.component';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  ramos: any =[];
  firebaseSvc = inject(FirebaseService);
  constructor(
    private router: Router,
    private http: HttpClient,
    private dataService: DataService) { }

  async ngOnInit() {
    this.ramos = await this.firebaseSvc.getSubjects();
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

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }

  setCod(value: any) {
    this.dataService.setCodigoAsig(value);
  }

  onClickAndSetCod(ruta: string, value: any) {
    this.onClick(ruta); // Llama a la función onClick con la ruta
    this.setCod(value); // Llama a la función setCod con el valor que desees
  }

}
