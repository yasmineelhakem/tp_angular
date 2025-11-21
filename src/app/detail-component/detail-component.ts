import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Cv } from '../models/cv.model';

@Component({
  selector: 'app-detail-component',
  imports: [CommonModule],
  templateUrl: './detail-component.html',
  styleUrl: './detail-component.css',
})
export class DetailComponent {
  @Input() cv: Cv | null = null;
}
