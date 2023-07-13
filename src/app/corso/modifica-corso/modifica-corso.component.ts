import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AulaModel } from 'src/app/model/aula-model';
import { CorsoModel } from 'src/app/model/corso-model';
import { DocenteModel } from 'src/app/model/docente-model';
import { CorsoService } from 'src/app/services/corso.service';
import { DocenteService } from 'src/app/services/docente.service';

@Component({
  selector: 'app-modifica-corso',
  templateUrl: './modifica-corso.component.html',
  styleUrls: ['./modifica-corso.component.css']
})
export class ModificaCorsoComponent {
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient, private router: Router, private corsoService: CorsoService, private route: ActivatedRoute){}

  formCorso!: FormGroup;

  idCorso!: number;
  aulee!: any[];
  docenti!: DocenteModel[];

  ngOnInit(){
    this.route.params.subscribe(
      (params) => {
        this.idCorso = params['id'];
        this.httpClient.get<any>('http://localhost:8086/corso/findbyid/' + this.idCorso).subscribe(
          (corso) => {
            this.formCorso.controls['oDocente'].setValue(corso.oDocente.cognome);
            this.formCorso.controls['oAula'].setValue(corso.oAula.descrizione);
            this.formCorso.controls['corso'].setValue(corso.corso);
            this.formCorso.controls['durata'].setValue(corso.durata);
            this.formCorso.controls['dataInizio'].setValue(corso.dataInizio);
          }
        )
      }
    )    
    console.log('aula ' + this.aulee)

    this.httpClient.get<AulaModel[]>('http://localhost:8086/aula/list').subscribe(
      (aule) => {
        console.log('Le aule ' , aule[0].chiave)
        aule.forEach(function (aula){
         
        })
        this.aulee = aule;
      }
    )
    console.log('aula 2' + this.aulee)

    this.httpClient.get<DocenteModel[]>('http://localhost:8086/docente/list').subscribe(
      (docenti) => {
        this.docenti = docenti;
      }
    )






    this.formCorso = new FormGroup({
        idCorso: new FormControl('', Validators.required),
        oDocente: new FormControl('', Validators.required),
        oAula: new FormControl('', Validators.required),
        corso:  new FormControl('', Validators.required),
        durata:  new FormControl('', Validators.required),
        dataInizio:  new FormControl('', Validators.required),
        partecipanti:  new FormControl('', Validators.required)

    })
  }


  modificaCorso(){
    const corso: CorsoModel = {
      chiave: this.idCorso,

      oDocente: this.formCorso.value.oDocente,

      oAula: this.formCorso.value.oAula,

      corso: this.formCorso.value.corso,
      durata: this.formCorso.value.durata,
      dataInizio: this.formCorso.value.dataInizio,
      partecipanti: this.formCorso.value.partecipanti

    }
    this.corsoService.modificaCorso(corso).subscribe(
      ()=>{}
    )
    return this.router.navigate(['/elenco-corsi'])
  }
}
