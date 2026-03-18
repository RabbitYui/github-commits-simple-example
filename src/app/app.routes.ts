import { Routes } from '@angular/router';
import { CommitsComponent } from './pages/commits/commits.component';


export const routes: Routes = [
  {path: '', redirectTo: '/commits', pathMatch: 'full'},
  {path: 'commits', component: CommitsComponent},
  {path: 'commits/:branch', component: CommitsComponent}
];
