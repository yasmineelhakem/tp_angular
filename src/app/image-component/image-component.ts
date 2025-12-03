import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { interval, Observable} from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-image-component',
  imports: [CommonModule],
  templateUrl: './image-component.html',
  styleUrl: './image-component.css',
})
export class ImageComponent implements OnInit {
  @Input() images: string[] = [];          
  @Input() width: string = '300px';       
  @Input() height: string = '200px';       
  @Input() intervalTime: number = 2000; 

  currentImage: string = '';

  currentImage$!: Observable<string>;

   ngOnInit() {
    this.currentImage$ = interval(this.intervalTime).pipe(
      map(i => this.images[i % this.images.length]),
      startWith(this.images[this.images.length-1])
    );
  }

}
