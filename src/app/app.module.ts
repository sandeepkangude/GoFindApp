import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';

import { FindService } from './find.service';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [ FindService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
