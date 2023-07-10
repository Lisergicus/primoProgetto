import { Component, ViewChild } from '@angular/core';
import { IncrementoContatoreComponent } from '../incremento-contatore/incremento-contatore.component';

@Component({
  selector: 'app-contatore',
  templateUrl: './contatore.component.html',
  styleUrls: ['./contatore.component.css']
})
export class ContatoreComponent {
  k: number = 0;

}
