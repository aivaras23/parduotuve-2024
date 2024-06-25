import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ProductsService } from '../../../../services/products.service';
import { Product } from '../../../../models/product';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-table-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './table-products.component.html',
  styleUrl: './table-products.component.css'
})
export class TableProductsComponent implements OnChanges {
  public products:Product[]=[];

  @Input()
  public filterText:String="";

  private loadProducts(){

    if (this.filterText!=""){
      this.productsService.getFiltredProducts(this.filterText).subscribe((data)=>{
        this.products=data;
      });
    }else{
      this.productsService.getProducts().subscribe((data)=>{
        this.products=data;
      });
    }
  }

  constructor (private productsService:ProductsService, public authService:AuthService){
    this.loadProducts();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadProducts();
  }
 

  public deleteProduct(id:number){
    this.productsService.deleteProduct(id).subscribe((data)=>{
      this.loadProducts();
    });

  }



}