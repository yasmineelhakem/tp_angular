import { Component, Output, EventEmitter } from '@angular/core';
import { CVS } from '../data/cvs.data';
import { Cv } from '../models/cv.model';
import { ItemComponent } from '../item-component/item-component';

@Component({
  selector: 'app-liste-component',
  imports: [ItemComponent],
  templateUrl: './liste-component.html',
  styleUrl: './liste-component.css',
})
export class ListeComponent {
  cvs = CVS;
  @Output() cvSelected = new EventEmitter<Cv>();

  onSelectCv(cv: Cv): void {
    this.cvSelected.emit(cv);
  }
}
