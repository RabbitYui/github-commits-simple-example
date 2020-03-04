import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CommitsComponent} from './pages/commits/commits.component';


const routes: Routes = [
  {path: '', redirectTo: '/commits', pathMatch: 'full'},
  {path: 'commits', component: CommitsComponent},
  {path: 'commits/:branch', component: CommitsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
