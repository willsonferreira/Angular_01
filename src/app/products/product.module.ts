import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ProductListComponent } from './product-list.component';

@NgModule({
  imports: [
    RouterModule.forChild([
      { path: 'products', component: ProductListComponent }
    ])
  ],
  declarations: [
    ProductListComponent
  ]
})
export class ProductModule {}