import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { CartComponent } from './carts/components/cart/cart.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { ItemsComponent } from './items/items.component';
import { AllProductComponent } from './products/components/all-product/all-product.component';
import { ProductDetailsComponent } from './products/components/product-details/product-details.component';
import { PurchasesComponent } from './purchases/purchases.component';


const routes: Routes = [
  // { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: 'home', component: HomeComponent },
  // { path: 'dashboard', component: DashboardComponent },
  // {path:'purchases',component:PurchasesComponent},
  // {path:'items',component:ItemsComponent},
  // {path:'consumption',component:ConsumptionComponent},
  // {path:'add-user',component:AddUserComponent},
  // {path:'addproduct',component:AddproductComponent},
  // {path:'addcategory',component:AddcategoryComponent},
  {path:'', redirectTo: '/products', pathMatch: 'full'},
  {path:'products',component:AllProductComponent},
  {path:'products/:id',component:ProductDetailsComponent},
  {path:'cart',component:CartComponent},

  { path: '**', redirectTo: 'products', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
