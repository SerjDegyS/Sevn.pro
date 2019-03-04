import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OfferingsComponent } from './offerings/offerings.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { OffertingsService } from './services/offertings.service';

@NgModule({
  declarations: [
    AppComponent,
    OfferingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
