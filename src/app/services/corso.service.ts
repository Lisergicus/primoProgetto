import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { CorsoModel } from '../model/corso-model';

@Injectable({
  providedIn: 'root'
})
export class CorsoService{
  snackBar: any;
  constructor(private httpClient: HttpClient, private router: Router, private route: ActivatedRoute ){}

  urlAPI: string = 'http://localhost:8086/corso';

  getLista(): Observable<CorsoModel[]>{
    return this.httpClient.get<CorsoModel[]>(this.urlAPI + '/list');
  };

  setNuovoCorso(corso: CorsoModel): any{
    this.httpClient.post(this.urlAPI + 'insertcorso', corso).subscribe(
      () => {
        this.router.navigate(['/elenco-corsi'])
      }
    )
  }

  modificaCorso(corso: CorsoModel): any{
    this.httpClient.post(this.urlAPI + 'updatecorso', corso).subscribe(
      ()=> {
        this.router.navigate(['/elenco-corsi'])
      }
    )
  }

  eliminaCorso(id:number){
    this.httpClient.delete(this.urlAPI + '/deletecorso' + id).subscribe(
      () => {
        this.snackBar.open('Corso eliminato con Successo!', '',  {duration:4000, verticalPosition:'top'})
        this.router.navigate(['/elenco-corsi'])
      }
    )
  }


}
