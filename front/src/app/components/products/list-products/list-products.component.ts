import { Component } from '@angular/core';
import { FilterProductsComponent } from './filter-products/filter-products.component';
import { TableProductsComponent } from './table-products/table-products.component';

@Component({
  selector: 'app-list-products',
  standalone: true,
  imports: [FilterProductsComponent, TableProductsComponent],
  templateUrl: './list-products.component.html',
  styleUrl: './list-products.component.css'
})
export class ListProductsComponent {

}
