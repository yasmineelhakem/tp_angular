import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche-service';

@Component({
  selector: 'app-detail-component',
  imports: [CommonModule],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css',
})
export class DetailComponent {
  @Input() cv: Cv | null = null;

  private embaucheService = inject(EmbaucheService);

  embaucher() {
    if (!this.cv) return; 
    this.embaucheService.embaucher(this.cv);  }
}
