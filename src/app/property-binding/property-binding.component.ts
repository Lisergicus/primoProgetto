import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  styleUrls: ['./property-binding.component.css'],
})
export class PropertyBindingComponent {
  isDisable: boolean = false;
  animali: any = {
    tipo: 'Gatto',
    immagineUrl:
      'https://t1.gstatic.com/licensed-image?q=tbn:ANd9GcRRv9ICxXjK-LVFv-lKRId6gB45BFoNCLsZ4dk7bZpYGblPLPG-9aYss0Z0wt2PmWDb',
  };

  style: any = {
    primo: "btn btn-success",
    secondo: "btn btn-primary",
  };
  bg: any = {
    uno: "background-color: brown;",
    due: "background-color: rgb(47, 143, 18);"
  }
}
