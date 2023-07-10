import { ElementRef, Pipe, PipeTransform, ViewChild } from '@angular/core';

@Pipe({
  name: 'fizzBuzz',
  pure: false
})
export class FizzBuzzPipe implements PipeTransform {
    ritornoFizz: any[] = [];

    transform(num: number[]): any[] {
      num.forEach(element => {

      if(element % 3 === 0 && element % 5 === 0){ 
        this.ritornoFizz.push('FizzBuzz')
      } else if (element % 3 === 0) {
        this.ritornoFizz.push('Fizz')
      }  else if(element % 5 === 0) {
        this.ritornoFizz.push('Buzz')
      } else if (element) {this.ritornoFizz.push(element)}

    });
  
    return this.ritornoFizz;
  }
}
