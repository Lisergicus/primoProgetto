import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'personalizata'
})
export class PersonalizataPipe implements PipeTransform {

  transform(stringa:string , pos: number): string {
    return stringa.slice(0,pos) + stringa.charAt(pos).toUpperCase() + stringa.slice(pos+1);
  }

}
