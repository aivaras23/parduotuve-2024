import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { ProductsService } from '../../../services/products.service';
import { Router } from '@angular/router';
import { ErrorComponent } from '../../helper/error/error.component';

@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule, CommonModule, ErrorComponent],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.css'
})
export class NewProductComponent {
  public isError=false;
  public errorText="";
  constructor (private productsService:ProductsService, private router:Router){

  }

  public productSubmit(form:NgForm){
    this.productsService.addProduct(form.form.value).subscribe({
      next:(data)=>{
        this.router.navigate(['products','list']);
      },
      error:(error)=>{
        this.isError=true;
        this.errorText=error.error.text;
      }
    });
  }
}