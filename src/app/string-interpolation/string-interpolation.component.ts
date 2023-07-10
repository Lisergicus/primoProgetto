import { Component } from '@angular/core';

@Component({
  selector: 'app-string-interpolation',
  templateUrl: './string-interpolation.component.html',
  styleUrls: ['./string-interpolation.component.css'],
})
export class StringInterpolationComponent {
  variabileStringa: string = 'Sono una Stringa';
  variabileNumero: number = 5;
  frutti: String[] = ['Mela', 'Limoni', 'Arance'];
  oggetto: any = {
    nome: 'Mario',
    cognome:  'Rossi'
  }

  getStringa(): string {
    return 'Prova';
  }

  titolo: String[] = ['Benvenuti', 'Menu']

  contenuto1: String= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
  contenuto2: String= ' Menu: Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. '

  getPage(): boolean{
    return true;
  }

  menu: String[] = ['Carbonara', 'Matriciana', 'Cacio e Pepe']
}
