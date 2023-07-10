import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';



@Component({
  selector: 'app-elenco-studenti',
  templateUrl: './elenco-studenti.component.html',
  styleUrls: ['./elenco-studenti.component.css']
})
export class ElencoStudentiComponent {
  constructor(private httpClient: HttpClient, private router: Router, private snackBar: MatSnackBar){}
  
  studente = {
    id:'',
    nome:'',
    cognome:'',
    matricola:''
  }


  urlAPI = 'http://localhost:8086/studente'
  
  ngOnInit(){
    this.httpClient.get(this.urlAPI + '/list').subscribe(
      

      (response:any) => {
        this.elencoStudenti = response

        // response.forEach(element => {
        //   this.elencoStudenti.push(element);
        // });

        // this.router.navigate(['/elenco-studenti'])
      }
    )
  }

  elimina(id:number){
    this.httpClient.delete(this.urlAPI + '/Deletestudente/' + id).subscribe(
      () => {
        this.snackBar.open('Studente eliminato con Successo!', '',  {duration:4000, verticalPosition:'top'})

      }
    )
  }


  elencoStudenti: any[] = [
    {
      id:'',
      cognome: '',
      nome: "",
      matricola:''
    }

    // {
    //   nome: 'Maurizio',
    //   cognome: 'Affatato' 
    // },
    // {
    //   nome: 'Amina Hasanova',
    //   cognome: 'Al Haddad' 
    // },
    // {
    //   nome: 'Alessandro',
    //   cognome: 'De Nicolo' 
    // },
    // {
    //   nome: 'Pierluca',
    //   cognome: 'Bello' 
    // },
    // {
    //   nome: 'Hasantha',
    //   cognome: 'Ilayperuma' 
    // },
    // {
    //   nome: 'Joaquin',
    //   cognome: 'Colombo' 
    // },
    // {
    //   nome: 'Daniele',
    //   cognome: 'Cannelonga' 
    // },
    // {
    //   nome: 'Daniele',
    //   cognome: 'Sborgia' 
    // }
  ]
}
