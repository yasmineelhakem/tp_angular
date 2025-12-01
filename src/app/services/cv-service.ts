import { Injectable, signal } from '@angular/core';
import { CVS } from '../data/cvs.data';
import { Cv } from '../models/cv.model';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs = signal<Cv[]>(CVS);

  getCvs() {
    return this.cvs();
  }

}
