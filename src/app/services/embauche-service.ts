import { Injectable, signal } from '@angular/core';
import { CVS } from '../data/cvs.data';
import { Cv } from '../models/cv.model';
@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {

  embauches = signal<Cv[]>([]);

  constructor() {}

  embaucher(cv: Cv) {
    // éviter les doublons
    if (!this.embauches().some(c => c.id === cv.id)) {
      this.embauches.update(old => [...old, cv]);
    }
  }

  getEmbauches() {
    return this.embauches();
  }
}
