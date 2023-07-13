import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { CorsoModel } from 'src/app/model/corso-model';
import { CorsoService } from 'src/app/services/corso.service';


@Component({
  selector: 'app-elenco-corsi',
  templateUrl: './elenco-corsi.component.html',
  styleUrls: ['./elenco-corsi.component.css'],
})
export class ElencoCorsiComponent {
  constructor(
    private httpClient: HttpClient,
    private router: Router,
    private corsoService: CorsoService,
    private snackBar: MatSnackBar
  ) {}

  urlAPI = 'http://localhost:8086/docente';

  elencoCorsi!: CorsoModel[];

  colonne: string[] = ['professore', 'aula', 'corso', 'durata', 'dataInizio', 'modifica', 'elimina'];

  ngOnInit() {
    this.recuperaElenco();
  }
  recuperaElenco() {
    this.corsoService.getLista().subscribe((risposta: CorsoModel[]) => {
      this.elencoCorsi = risposta;
    });
  }

  elimina(id: number) {
    this.httpClient.delete(this.urlAPI + '/deletecorso/' + id).subscribe(() => {
      this.router.navigate(['/elenco-corsi']);
    });
  }
}
