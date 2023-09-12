import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { DataService } from './../../app.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  ramos: any =[];
  permission!: boolean;

  constructor(
    private http: HttpClient,
    private dataService: DataService) {}

  ngOnInit() {
    this.getRamos().subscribe(res=>{
      console.log("Res", res)
      this.ramos = res;
    });
    this.permission = this.dataService.getPermission();
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
