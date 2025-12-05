import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-formulaire',
  imports: [FormsModule, CommonModule],
  templateUrl: './formulaire.html',
  styleUrl: './formulaire.css',
})
export class Formulaire {
  onSubmit(formulaire: NgForm) {
    console.log('Formulaire :', formulaire.value);
  }
}