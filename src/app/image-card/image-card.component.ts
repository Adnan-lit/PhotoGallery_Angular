import { Component, inject, Input } from '@angular/core';

@Component({
  selector: 'app-image-card',
  standalone: true,
  imports: [],
  templateUrl: './image-card.component.html',
  styleUrl: './image-card.component.css'
})
export class ImageCardComponent {

  @Input() image: any;


  constructor() { }
  


}
