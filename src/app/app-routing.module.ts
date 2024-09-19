import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActionComponent } from './action/action.component';
import { ThrillerComponent } from './thriller/thriller.component';
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  { path: 'action', component: ActionComponent },
  { path: 'thriller', component: ThrillerComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/action', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
