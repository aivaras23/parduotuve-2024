import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';

export const routes: Routes = [
    {path:'products/list',component:ListProductsComponent},
    {path:'products/new', component:NewProductComponent},
    {path:"products/:id", component:UpdateProductComponent},
    {path: '', component:HomePageComponent}
];
