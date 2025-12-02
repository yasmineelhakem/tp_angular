import { Component, Input, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { CvService } from '../services/cv-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-component',
  imports: [CommonModule],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css',
})
export class DetailComponent {

  route = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  
  cv = this.cvService.getCvById(Number(this.route.snapshot.paramMap.get('id')));
  
  deleteCv() {
    if (!this.cv) return;
    this.cvService.deleteCv(this.cv.id);
    this.router.navigate(['/cv']);
  }
}
