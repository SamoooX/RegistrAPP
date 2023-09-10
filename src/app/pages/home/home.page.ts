import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ramos: any =[];

  constructor(private http: HttpClient) {}

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
}
