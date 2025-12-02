import { Injectable, signal } from '@angular/core';
import { CVS } from '../data/cvs.data';
import { Cv } from '../models/cv.model';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cvs = signal<Cv[]>(CVS);
  constructor(private toastr: ToastrService) {}

  getCvs() {
    return this.cvs();
  }

  getCvById(id: number) {
  return this.cvs().find(cv => cv.id === id);
  }

  deleteCv(id: number) {
    this.cvs.set(this.cvs().filter(cv => cv.id !== id));
    this.toastr.success('Le CV a été supprimé ', 'Succès');
    
  }
}
