import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component'

@NgModule({
  imports: [
      BrowserModule,
      FormsModule,
      NgbModule,
      FontAwesomeModule
    ],
  declarations: [
    AppComponent,
    ProductListComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}