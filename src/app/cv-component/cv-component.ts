import { Component } from '@angular/core';
import { ListeComponent } from "../liste-component/liste-component";
import { DetailComponent } from "../detail-component/detail-component";
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-cv-component',
  imports: [ListeComponent, DetailComponent],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css',
})
export class CvComponent {
  selectedCv: Cv | null = null;

  onCvSelected(cv: Cv): void {
    this.selectedCv = cv;
  }
}
