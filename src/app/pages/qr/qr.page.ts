import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-qr',
  templateUrl: './qr.page.html',
  styleUrls: ['./qr.page.scss'],
})
export class QrPage implements OnInit {

  ramos: any =[];

  constructor(
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
    this.getRamos().subscribe(res=>{
      console.log("Res", res)
      this.ramos = res;
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

  onClick(ruta:string)
  {
    this.router.navigate(['/'+ruta])
  }
}
