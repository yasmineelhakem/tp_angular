import { Component, Output, EventEmitter, inject } from '@angular/core';
import { CVS } from '../data/cvs.data';
import { Cv } from '../models/cv.model';
import { ItemComponent } from '../item-component/item-component';
import { CvService } from '../services/cv-service';

@Component({
  selector: 'app-liste-component',
  imports: [ItemComponent],
  templateUrl: './liste-component.html',
  styleUrl: './liste-component.css',
})
export class ListeComponent {

  private cvService = inject(CvService);
  cvs = this.cvService.cvs;

  @Output() cvSelected = new EventEmitter<Cv>();

  onSelectCv(cv: Cv): void {
    this.cvSelected.emit(cv);
  }
}
