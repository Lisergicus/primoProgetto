import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-eser-input-child',
  templateUrl: './eser-input-child.component.html',
  styleUrls: ['./eser-input-child.component.css']
})
export class EserInputChildComponent {
  @Input() imgUrlChild!: string;

}
