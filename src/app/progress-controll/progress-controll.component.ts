import { Component, ViewChild } from '@angular/core';
import { Eser1Component } from '../eser1/eser1.component';

@Component({
  selector: 'app-progress-controll',
  templateUrl: './progress-controll.component.html',
  styleUrls: ['./progress-controll.component.css']
})
export class ProgressControllComponent {
  // 

  numPercParent: number = 0;

  onClickPercPiu(numInput: string){
    this.numPercParent = parseInt(numInput);
  }
  

  // 



  @ViewChild('pbd') componentProgressBar!: Eser1Component

  
  onClickPiuProg() {
    if (this.numPercParent >= 100) {
      this.numPercParent = 0;
    } else {
      this.numPercParent++;
    }
  }
  onClickMenoProg() {
    if (this.numPercParent <= 0) {
      this.numPercParent = 100;
    } else {
      this.numPercParent--;
    }
  }
}
