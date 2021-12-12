import { Component, OnInit } from '@angular/core';

import { LocalStorageService } from "src/app/services/local-storage.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  currentUser: any = null;

  constructor(
    private localStorageService: LocalStorageService
  ) {
    this.currentUser = this.localStorageService.get('user');
  }

  ngOnInit(): void {
  }

}
