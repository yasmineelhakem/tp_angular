import { Routes } from '@angular/router';
import { ColorComponent } from './color-component/color-component';
import { CvComponent } from './cv-component/cv-component';
import { TodoComponent } from './todo-component/todo-component';
import { DetailComponent } from './detail-component/detail-component';

export const routes: Routes = [
    { path: 'color', component: ColorComponent},
    { path: 'cv', component: CvComponent},
    { path: 'todo', component: TodoComponent},
    { path: 'cv-detail/:id', component: DetailComponent },

];
