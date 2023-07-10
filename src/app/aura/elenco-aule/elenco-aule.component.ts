import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AulaModel } from 'src/app/model/aula-model';

@Component({
  selector: 'app-elenco-aule',
  templateUrl: './elenco-aule.component.html',
  styleUrls: ['./elenco-aule.component.css']
})
export class ElencoAuleComponent implements OnInit{
  constructor(private httpClient: HttpClient, private router: Router, private snackBar: MatSnackBar){}

  urlAPI = 'http://localhost:8086/aula'

  elencoAule!: AulaModel[];

  colonne: string[] = [
    'descrizione', 'nPosti', 'modifica', 'elimina'
  ]

  ngOnInit(){
    this.httpClient.get<AulaModel[]>(this.urlAPI + '/list').subscribe(
      (risposta: AulaModel[]) => {
        this.elencoAule = risposta;
      }
    );
  }

  elimina(id:number){
    this.httpClient.delete(this.urlAPI + '/DeleteAula/' + id).subscribe(
      ()=>{
        this.snackBar.open('Aula eliminata con Successo!', '',  {duration:4000, verticalPosition:'top'})
        this.router.navigate(['/elenco-aule'])
      } 
      
     )
  }


}
