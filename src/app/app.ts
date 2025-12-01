import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CvComponent } from "./cv-component/cv-component";
import { Header } from './header/header';

@Component({
  selector: 'app-Component',
  imports: [ CvComponent, RouterOutlet, Header],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
export class App {
  protected readonly title = signal('tp1_angular');
}
