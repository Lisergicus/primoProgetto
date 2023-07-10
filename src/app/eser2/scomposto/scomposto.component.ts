import { Component } from '@angular/core';

@Component({
  selector: 'app-scomposto',
  templateUrl: './scomposto.component.html',
  styleUrls: ['./scomposto.component.css']
})
export class ScompostoComponent {
  vestiti: any[] = [
    {
      nome:'Maglietta',
      colore: 'Verde',
      taglia: 'L',
    },
    {
      nome:'Scarpe',
      colore: 'Nere',
      taglia: '43',
    },
    {
      nome:'Pantaloni',
      colore: 'Blu',
      taglia: 'M',
    },
    {
      nome:'Felpa',
      colore: 'Verde',
      taglia: 'M',
    },
    {
      nome:'Giacca',
      colore: 'Rossa',
      taglia: 'S',
    },
    {
      nome:'Sciarpa',
      colore: 'Verde',
      taglia: 'L',
    },
    {
      nome:'Scarponi',
      colore: 'Gialli',
      taglia: '42',
    },
    {
      nome:'Occhiali',
      colore: 'Marrone',
      taglia: '/',
    },
    {
      nome:'Cintura',
      colore: 'Marrone',
      taglia: 'L',
    },
    {
      nome:'Cappello',
      colore: 'Nero',
      taglia: 'M',
    }
  ]
  
  k:number = 0;

  onClickPiu() {
    if (this.k >= 10) {
      this.k = 0;
    } else {
      this.k++;
    }
  }
  onClickMeno() {
    if (this.k <= 0) {
      this.k = 10;
    } else {
      this.k--;
    }
  }
}
