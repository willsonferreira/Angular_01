import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/star.component';
@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    StarComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      HttpClientModule
    ],  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}