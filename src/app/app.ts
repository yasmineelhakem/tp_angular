import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvComponent } from "./cv-component/cv-component";

@Component({
  selector: 'app-Component',
  imports: [ CvComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp1_angular');
}
