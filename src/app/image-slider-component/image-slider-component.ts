import { Component } from '@angular/core';
import { ImageComponent } from '../image-component/image-component';

@Component({
  selector: 'app-image-slider-component',
  imports: [ImageComponent],
  templateUrl: './image-slider-component.html',
  styleUrl: './image-slider-component.css',
})
export class ImageSliderComponent {
  images: string[] = [
    'https://placecats.com/bella/300/200',
    'https://placecats.com/g/300/200',
    'https://placecats.com/neo_2/300/200',
    'https://placecats.com/neo_banana/300/200',
    'https://placecats.com/louie/300/200'
    
  ];      
}
