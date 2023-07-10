import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi-professore',
  templateUrl: './aggiungi-professore.component.html',
  styleUrls: ['./aggiungi-professore.component.css']
})
export class AggiungiProfessoreComponent {
  constructor(private  httpClient: HttpClient,  private router: Router){}

  formProfessore = {
    id:'',
    nome:'',
    cognome:''
  }
  urlAPI = 'http://localhost:8086/docente/Nuovamodifica'

  onSubmit(){
    console.log(this.formProfessore)
    this.httpClient.post(this.urlAPI, this.formProfessore).subscribe(
      ()=> {
        this.router.navigate(['/elenco-professori'])
      }
    )
  }
}
