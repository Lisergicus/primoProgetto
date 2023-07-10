import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-template-reference-variable',
  templateUrl: './template-reference-variable.component.html',
  styleUrls: ['./template-reference-variable.component.css'],
})
export class TemplateReferenceVariableComponent {
  @ViewChild('txtInput') input!: ElementRef<HTMLInputElement>


  ingredienti: string[] = [
    'Uova',
    'Guanciale',
    'Spaghetti',
    'Pecorino',
    'Salva Pomodoro',
  ];

  i: number = 0;
  onClickPiuIngr() {
    if(this.i < this.ingredienti.length-1){
       this.i++;
    }  
  }
  onClickMenoIngr() {
    if(this.i > 0){
      this.i--;
    }
  }

  onClickAggiungi(alimento: string) {
    this.ingredienti.push(alimento);
    this.input.nativeElement.value=""
  }
}
