import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-eser3',
  templateUrl: './eser3.component.html',
  styleUrls: ['./eser3.component.css']
})
export class Eser3Component {
  // @ViewChild('txtInput') Currency!: ElementRef<HTMLInputElement>



  valueCur: number = 1;
  OnConvertCurrency(currency: string){
    this.valueCur = parseFloat(currency);
  }

  page: number = 0;
  OnNavClick(num: number){
    this.page = num;
  }
}
