import { Component, ViewChild } from '@angular/core';
import { ContatoreComponent } from '../contatore/contatore.component';

@Component({
  selector: 'app-incremento-contatore',
  templateUrl: './incremento-contatore.component.html',
  styleUrls: ['./incremento-contatore.component.css']
})
export class IncrementoContatoreComponent {
  @ViewChild('cont') contatore!: ContatoreComponent

  onClickAvanti() {
    if (this.contatore.k >= 10) {
      this.contatore.k = 0;
    } else {
      this.contatore.k++;
    }
  }
  onClickIndietro() {
    if (this.contatore.k <= 0) {
      this.contatore.k = 10;
    } else {
      this.contatore.k--;
    }
  }
}
