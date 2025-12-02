import { Component, Input, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cv } from '../models/cv.model';
import { EmbaucheService } from '../services/embauche-service';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-carte',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './card-component.html',
  styleUrl: './card-component.css',
})

export class CardComponent {
  @Input() cv: Cv | null = null;

  private embaucheService = inject(EmbaucheService);
  private router = inject(Router);

  embaucher() {
    if (!this.cv) return; 
    this.embaucheService.embaucher(this.cv);  }

  showDetails() {
    if (!this.cv) return;
    this.router.navigate(['/cv-detail', this.cv.id]);
  }

}
