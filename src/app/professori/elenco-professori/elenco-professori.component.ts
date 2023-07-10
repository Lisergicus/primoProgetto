import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DocenteModel } from 'src/app/model/docente-model';
import { DocenteService } from 'src/app/services/docente.service';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-elenco-professori',
  templateUrl: './elenco-professori.component.html',
  styleUrls: ['./elenco-professori.component.css']
})
export class ElencoProfessoriComponent implements OnInit{
  constructor(private httpClient: HttpClient, private router: Router, private docenteService: DocenteService, private snackBar: MatSnackBar){}

  urlAPI = 'http://localhost:8086/docente'
  
  elencoProfessori!: DocenteModel[];

  colonne: string[] = [
    'nome', 'cognome', 'modifica', 'elimina'
  ]
  // docente = {
  //   id:'',
  //   nome:'',
  //   cognome:''
  // }

  ngOnInit(){
    // this.httpClient.get(this.urlAPI).subscribe(
    //   (response:any) => {
    //     this.elencoProfessori = response
    //   }
    // )
    this.recuperaElenco();
  }

  recuperaElenco(){
    this.docenteService.getLista().subscribe(
      (risposta: DocenteModel[])=>{
        this.elencoProfessori = risposta;
      }
    )
  }

  // nuovoDocente(){
  //   this.docenteService.setNuovoDocente().subscribe(
  //     ()=>{
        
  //     }
  //   )
  // }
  

  elimina(id:number){
    this.httpClient.delete(this.urlAPI + '/DeleteDocente/' + id).subscribe(
      () => {
        this.snackBar.open('Docente eliminato con Successo!', '',  {duration:4000, verticalPosition:'top'})

        this.router.navigate(['/elenco-docenti'])
      }
    )
  }


 

}
