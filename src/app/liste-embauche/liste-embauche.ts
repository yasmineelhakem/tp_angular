import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../services/embauche-service';

@Component({
  selector: 'app-liste-embauche',
  imports: [],
  templateUrl: './liste-embauche.html',
  styleUrl: './liste-embauche.css',
})
export class ListeEmbauche {
  embaucheService = inject(EmbaucheService);
  embauches = this.embaucheService.embauches;

}
