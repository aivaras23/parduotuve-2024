import { Routes } from '@angular/router';
import { ListProductsComponent } from './components/products/list-products/list-products.component';
import { NewProductComponent } from './components/products/new-product/new-product.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { UpdateProductComponent } from './components/products/update-product/update-product.component';
import { SigninComponent } from './components/auth/signin/signin.component';
import { LoginComponent } from './components/auth/login/login.component';
import { viewGuard } from './guards/view.guard';
import { editGuard } from './guards/edit.guard';
import { ListUsersComponent } from './components/users/list-users/list-users.component';
import { adminGuard } from './guards/admin.guard';
import { UpdateUserComponent } from './components/users/update-user/update-user.component';
import { ProfileComponent } from './components/users/profile/profile.component';
import { ListOrdersComponent } from './components/orders/list-orders/list-orders.component';
import { NewOrderComponent } from './components/orders/new-order/new-order.component';

export const routes: Routes = [
    {   
        path:"products/list",component:ListProductsComponent,
        canActivate:[viewGuard]
    },
    {
        path:"products/new", component:NewProductComponent,
        canActivate:[editGuard]
    },
    {
        path:"products/:id", component:UpdateProductComponent,
        canActivate:[editGuard]
    },


    {   
        path:"orders/list",component:ListOrdersComponent,
        canActivate:[viewGuard]
    },
    {
        path:"orders/new", component:NewOrderComponent,
        canActivate:[editGuard]
    },


    {path:"auth/signin", component:SigninComponent},
    {path:"auth/login", component:LoginComponent},

    {   
        path:"users/list",
        component:ListUsersComponent,
        canActivate:[adminGuard] 
    },
    {
        path:"users/:id",
        component:UpdateUserComponent,
        canActivate:[adminGuard]
    },
    {
        path:"profile",
        component:ProfileComponent
    },
 
    {path:"", component:HomePageComponent},
   
    
];