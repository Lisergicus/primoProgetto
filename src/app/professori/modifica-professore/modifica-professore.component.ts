import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { DocenteModel } from 'src/app/model/docente-model';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-modifica-professore',
  templateUrl: './modifica-professore.component.html',
  styleUrls: ['./modifica-professore.component.css']
})
export class ModificaProfessoreComponent implements OnInit{
  constructor(private httpClient: HttpClient, private router: Router, private docenteService: DocenteService, private route: ActivatedRoute){}

  formDocente!: FormGroup;

  

  idDocente!: number;

  ngOnInit(): void {

    this.route.params.subscribe(
      (params)=>{
        this.idDocente = params['id'];
        this.httpClient.get<any>('http://localhost:8086/docente/findbyid/' + this.idDocente).subscribe(
          (docente)=>{
            this.formDocente.controls['cognome'].setValue(docente.cognome);
            this.formDocente.controls['nome'].setValue(docente.nome);
          }
        )
      }
    )
    
    this.formDocente= new FormGroup({
      cognome:new FormControl('', Validators.required),
      nome:new FormControl('', Validators.required)
    })
  }

  modificaDocente(){
    const docente = {
      id:this.idDocente,
      nome:this.formDocente.value.nome,
      cognome: this.formDocente.value.cognome
    }

    this.docenteService.setModificaDocente(docente).subscribe(
      ()=>{
      }
    )
    return this.router.navigate(['/elenco-professori'])
  }

}
