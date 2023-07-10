import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi-aula',
  templateUrl: './aggiungi-aula.component.html',
  styleUrls: ['./aggiungi-aula.component.css']
})
export class AggiungiAulaComponent {
  constructor(private httpClient: HttpClient, private router: Router){}

  formAula = {
    id:'',
    descrizione:'',
    numeroPosti:''
  }
  urlAPI = 'http://localhost:8086/aula/Nuovamodifica'

  onSubmit(){
    this.httpClient.post(this.urlAPI, this.formAula).subscribe(
      ()=>
      this.router.navigate(['/elenco-aule'])
    )
  }
}
