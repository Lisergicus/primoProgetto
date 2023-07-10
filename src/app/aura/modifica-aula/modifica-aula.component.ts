import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-modifica-aula',
  templateUrl: './modifica-aula.component.html',
  styleUrls: ['./modifica-aula.component.css']
})
export class ModificaAulaComponent implements OnInit{
  constructor(private httpClient: HttpClient, private route: ActivatedRoute, private router: Router){}

  formAula!: FormGroup;
  idAula!: number;
  urlAPI: string = 'http://localhost:8086/aula';

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) =>{
        this.idAula = params['id'];
        this.httpClient.get<any>('http://localhost:8086/aula/findbyid/' + this.idAula).subscribe(
          (aula)=>{
            this.formAula.controls['descrizione'].setValue(aula.descrizione);
            this.formAula.controls['numeroPosti'].setValue(aula.numeroPosti);
          }
        )
      }
    )
    this.formAula = new FormGroup({
      descrizione:new FormControl('', Validators.required),
      numeroPosti:new FormControl('', Validators.required)
    })
  }
  
  onSubmit(){
    const aula = {
      id:this.idAula,
      descrizione:this.formAula.value.descrizione,
      numeroPosti:this.formAula.value.nPosti
    }

    this.httpClient.post(this.urlAPI + '/Nuovamodifica', aula ).subscribe(
        () => {
        }
      )
    
    return this.router.navigate(['/elenco-aule']);
  }

}

