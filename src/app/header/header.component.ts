import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private httpClient: HttpClient, private router: Router){}
  page: number = 0;
  OnNavClick(num: number){
    this.page = num;
  }
}
