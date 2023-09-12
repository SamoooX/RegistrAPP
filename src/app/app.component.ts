import { Component } from '@angular/core';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor() {}
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private permission: boolean = false;

  getPermission() {
    return this.permission;
  }

  setPermission(value: boolean) {
    this.permission = value;
  }
}