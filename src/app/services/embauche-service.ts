import { Injectable, signal } from '@angular/core';
import { CVS } from '../data/cvs.data';
import { Cv } from '../models/cv.model';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {

  embauches = signal<Cv[]>([]);

  constructor(private toastr: ToastrService) {}

  embaucher(cv: Cv) {
    // éviter les doublons
    if (this.embauches().some((c) => c.id === cv.id)) {
        //alert("Cette personne est déjà embauchée");
        this.toastr.warning('Cette personne est déjà embauchée', 'Attention');
        return;
    }

    // ajouter un cv à embaucher 
    this.embauches.update(list => [...list, cv]);
    this.toastr.success('Le CV a été embauché avec succès !', 'Succès');

  }

}
