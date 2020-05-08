import { Component } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from "./product.service";

@Component ({
  selector: 'pm-products',
  templateUrl: './product-list.component.html'
}) 

export class ProductListComponent{
  pageTitle: string = 'Product List';
  imageWidth: number = 25;
  imageMargin: number = 5;
  showImage: boolean = false;
  
  _listFilter = '';
  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  
  filteredProducts: IProduct[];
  
  products: IProduct[];
    
    private _productService;

    constructor(private productService: ProductService){
      this._productService = productService;
    }
    
    performFilter(filterBy: string): IProduct[] {
      filterBy = filterBy.toLocaleLowerCase();
      return this.products.filter((product: IProduct) =>
        product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
    }

    toggleImage(){
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.products = this._productService.getProducts();
      this.filteredProducts = this.products;
      this.listFilter = 'cart';
    }
}