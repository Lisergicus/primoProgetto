import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocenteModel } from '../model/docente-model';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DocenteService {

  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute) { 
    
  }

  urlAPI: string = 'http://localhost:8086/docente';

  getLista(): Observable<DocenteModel[]>{
    return this.httpClient.get<DocenteModel[]>(this.urlAPI + '/list');
  }
  // fare nuovo aggiorna ed elimina 

  setNuovoDocente(): any{

    // return this.httpClient.post<any>(this.urlAPI, g);

  }


  formDocente = {
    id:'',
    nome:'',
    cognome: ''
  }

  idDocente!: number;
  setModificaDocente(docente: DocenteModel): any{
    
      this.httpClient.post(this.urlAPI + '/Nuovamodifica', docente ).subscribe(
        () => {
          // this.router.navigate(['/elenco-professori'])
        }
      )
    

    // this.route.params.subscribe(
    //   (params) => {
    //     this.idDocente = params['id'];
    //     this.httpClient.get<any>('http://localhost:8086/docente/findbyid/' + this.idDocente).subscribe(
    //       (docente) => {
    //         this.formDocente = docente
    //       }
    //     )
    //   }
    // )
    return this.router.navigate(['/elenco-professori']);
  }

}
