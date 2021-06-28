import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { NewProductsComponent } from './new-products/new-products.component';
import { ProductsComponent } from './products/products.component';

const routes: Routes = [
  {
    path:'product',component:ProductsComponent
  },
  {
    path:'new-product',component:NewProductsComponent
  },
  {
    path:"",redirectTo:"/product",pathMatch:'full'
  },
  {
    path:'edit-product/:id',component:EditProductComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
