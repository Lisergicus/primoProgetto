import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';

@Component({
  selector: 'app-tamplate-driven-from',
  templateUrl: './tamplate-driven-from.component.html',
  styleUrls: ['./tamplate-driven-from.component.css']
})
export class TamplateDrivenFromComponent {

  constructor(private httpClient: HttpClient, private router: Router){ }

  formLogin = {
    email: '',
    password: ''
  }

  urlAPI = 'http://localhost:8086/studente/list'
  onSubmit(){
    this.httpClient.post(this.urlAPI, this.formLogin).subscribe(
      () => {
      this.router.navigate(['/elenco-studenti'])
      console.log();
    });
  }


}
