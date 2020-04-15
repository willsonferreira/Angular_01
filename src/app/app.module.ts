import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  imports: [
      BrowserModule,
      FormsModule,
      NgModule
    ],  
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}