import { Injectable, signal } from '@angular/core';
import { CVS } from '../data/cvs.data';
import { Cv } from '../models/cv.model';
@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {

  embauches = signal<Cv[]>([]);

  embaucher(cv: Cv) {
    // éviter les doublons
    if (this.embauches().some((c) => c.id === cv.id)) {
        alert("Cette personne est déjà embauchée");
        return;
    }

    // ajouter un cv à embaucher 
    this.embauches.update(list => [...list, cv]);

  }

}
