
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-aggiungi-studente',
  templateUrl: './aggiungi-studente.component.html',
  styleUrls: ['./aggiungi-studente.component.css']
})
export class AggiungiStudenteComponent {
  constructor(private httpClient: HttpClient, private router: Router){ }

  formStudente = {
    id:'',
    nome:'',
    cognome: '',
    matricola: ''
  }

  urlAPI = 'http://localhost:8086/studente/Nuovomodifica'

  onSubmit() {
    console.log(this.formStudente)
    this.httpClient.post(this.urlAPI, this.formStudente).subscribe(
      () => {
        this.router.navigate(['/elenco-studenti'])
      }
    )
  }

}
