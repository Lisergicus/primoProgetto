import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica-studente',
  templateUrl: './modifica-studente.component.html',
  styleUrls: ['./modifica-studente.component.css']
})
export class ModificaStudenteComponent implements OnInit{

  constructor(private httpClient: HttpClient, private router: Router,
    private route: ActivatedRoute
  ){}
  
  formStudente = {
    id:'',
    nome:'',
    cognome: '',
    matricola: ''
  }

  idStudente!: number;
  
  ngOnInit(){
    this.route.params.subscribe(
      (params) => {
        this.idStudente = params['id'];
        this.httpClient.get<any>('http://localhost:8086/studente/findbyid/' + this.idStudente).subscribe(
          (studente)=>{
            console.log(studente),
  
            this.formStudente = studente
          } 

        );
      }
    );
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
