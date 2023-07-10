import { Component,  ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-pipe-predefinite',
  templateUrl: './pipe-predefinite.component.html',
  styleUrls: ['./pipe-predefinite.component.css']
})
export class PipePredefiniteComponent {
  dataOdierna = new Date();
  
  oggettoPersona = {
    nome: 'Mario',
    cognome: 'Rossi',
    provenienza: 'Roma'
  }

  
  @ViewChild('txtInput') input!: ElementRef<HTMLInputElement>
  
  numeri: number[] = [ ];
  onClickAdd(input: any){
    this.numeri.push(input);
  }

}
