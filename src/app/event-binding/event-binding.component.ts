import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css'],
})
export class EventBindingComponent {
  variabileContatore: number = 0;
  coordinateX: number = 0;
  coordinateY: number = 0;

  onClickAumenta() {
    this.variabileContatore++;
  }
  onMouseMove(event: MouseEvent) {
    console.log(event);
    this.coordinateX = event.clientX;
    this.coordinateY = event.clientY;
  }
  onTxtInput(event: Event){
    console.log('evento txtinput: ', event)
  }
}
