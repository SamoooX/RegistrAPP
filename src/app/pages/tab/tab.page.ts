import { Component, OnInit } from '@angular/core';
import { DataService } from './../../app.component';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.page.html',
  styleUrls: ['./tab.page.scss'],
})
export class TabPage implements OnInit {

  permission!: boolean;

  constructor(private dataService: DataService) { }
  
  ngOnInit() {
    this.permission = this.dataService.getPermission();
  }

}
