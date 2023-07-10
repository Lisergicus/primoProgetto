import { Component } from '@angular/core';

@Component({
  selector: 'app-eser-input-parent',
  templateUrl: './eser-input-parent.component.html',
  styleUrls: ['./eser-input-parent.component.css']
})
export class EserInputParentComponent {
  imgUrlParent: string = '';

  onClickInserisci(urlImg: string){
    this.imgUrlParent = urlImg;
  }

}
