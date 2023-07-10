import { Component, Input , OnChanges, SimpleChanges} from '@angular/core';
import { count } from 'rxjs';

@Component({
  selector: 'app-eser1',
  templateUrl: './eser1.component.html',
  styleUrls: ['./eser1.component.css'],
})
export class Eser1Component implements OnChanges {
// 


  @Input() numPerceChild!: number;

  classMod: string = "";
  valoreCorrente: number = 0;


  ngOnChanges(oggetto: SimpleChanges ){
    console.log(oggetto);
    // variabile classe cambiare con bootstrap.

    //valore diverso in base alla percentuale di caricamento  ..numPerceChild.currentValue

    this.valoreCorrente=  oggetto['numPerceChild'].currentValue ;

    if(this.valoreCorrente >=0 && this.valoreCorrente <=24 ){
      this.classMod = "progress-bar progress-bar-striped progress-bar-animated bg-info";
    }else if(this.valoreCorrente >=25 && this.valoreCorrente <=49 ){
      this.classMod = 'progress-bar progress-bar-striped progress-bar-animated bg-success';
    }else if(this.valoreCorrente >=50 && this.valoreCorrente <=74 ){
      this.classMod = 'progress-bar progress-bar-striped progress-bar-animated bg-warning';
    }else if(this.valoreCorrente >=75 && this.valoreCorrente <=100 ){
      this.classMod = "progress-bar progress-bar-striped progress-bar-animated bg-danger";
    }
  }


  // 
  paesaggi: any[] = [
    {
      img: 'Paesaggio Marziano',
      src: 'assets/img/marziano.jpg',
    },
    {
      img: 'Paesaggio Venusiano',
      src: 'assets/img/venusiano.jpg',
    },
    {
      img: 'Paesaggio Lunare',
      src: 'assets/img/lunare.jpg',
    },
  ];

  count: number = 0;
  onClickPiu() {
    this.count++;
  }
  onClickMeno() {
    this.count--;
  }

  ingredienti: any[] = [
    {
      nome: 'Uova',
    },
    {
      nome: 'Guanciale',
    },
    {
      nome: 'Spaghetti',
    },
    {
      nome: 'Pecorino',
    },
    {
      nome: 'Salva Pomodoro',
    },
  ];
  i: number = 0;
  onClickPiuIngr() {
    this.i++;
  }
  onClickMenoIngr() {
    this.i--;
  }

  k: number = 0;

  progress: any[] = [
    {
      set: 'width: 0%',
      bar: '0'
    },
    {
      set: 'width: 10%',
      bar: '10'
    },
    {
      set: 'width: 20%',
      bar: '20'
    },
    {
      set: 'width: 30%',
      bar: '30'
    },
    {
      set: 'width: 40%',
      bar: '40'
    },
    {
      set: 'width: 50%',
      bar: '50'
    },
    {
      set: 'width: 60%',
      bar: '60'
    },
    {
      set: 'width: 70%',
      bar: '70'
    },
    {
      set: 'width: 80%',
      bar: '80'
    },
    {
      set: 'width: 90%',
      bar: '90'
    },
    {
      set: 'width: 100%',
      bar: '100'
    },
  ];

  onClickPiuProg() {
    if (this.k >= 10) {
      this.k = 0;
    } else {
      this.k++;
    }
  }
  onClickMenoProg() {
    if (this.k <= 0) {
      this.k = 10;
    } else {
      this.k--;
    }
  }
}
