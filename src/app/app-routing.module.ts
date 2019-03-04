import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OfferingsComponent } from './offerings/offerings.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  // {path: '', component: AppComponent},
  {path: 'offerings', component: OfferingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
