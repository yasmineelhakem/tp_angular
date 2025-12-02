import { Component } from '@angular/core';
import { ListeComponent } from "../liste-component/liste-component";
import { DetailComponent } from "../detail-component/detail-component";
import { Cv } from '../models/cv.model';
import { ListeEmbauche } from '../liste-embauche/liste-embauche';
import { CardComponent } from '../card-component/card-component';

@Component({
  selector: 'app-cv-component',
  imports: [ListeComponent, ListeEmbauche, CardComponent],
  templateUrl: './cv-component.html',
  styleUrl: './cv-component.css',
})
export class CvComponent {
  selectedCv: Cv | null = null;

  onCvSelected(cv: Cv): void {
    this.selectedCv = cv;
  }
}
