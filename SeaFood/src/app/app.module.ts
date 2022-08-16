


import { BrowserModule } from '@angular/platform-browser';
// import { NgModule } from '@angular/core';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { PurchasesComponent } from './purchases/purchases.component';
import { MatSliderModule } from '@angular/material/slider';
import { ItemsComponent } from './items/items.component';
import { ConsumptionComponent } from './consumption/consumption.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MaterialModule } from '../material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AddUserComponent } from './add-user/add-user.component';
import { AddModalComponent } from './add-modal/add-modal.component';
import { ConsumptionmodalComponent } from './modals/consumptionmodal/consumptionmodal.component';
import { OrderesmodalComponent } from './modals/orderesmodal/orderesmodal.component';
import { OrderdetailsmodalComponent } from './modals/orderdetailsmodal/orderdetailsmodal.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { AddcategoryComponent } from './addcategory/addcategory.component';
import { AddproductmodalComponent } from './modals/addproductmodal/addproductmodal.component';
import { HttpClientModule } from '@angular/common/http';
//<<<<<<< shehab-bransh
import { SharedModule } from './shared/shared.module';
import { ProductsModule } from './products/products.module';
import { SingInComponent } from './sing-in/sing-in.component';

//<<<<<<< shehab-bransh
import { UserPageComponent } from './user-page/user-page.component';
//=======
//import { FormsModule, ReactiveFormsModule } from '@angular/forms';
//=======

// import { ToastrModule } from 'ngx-toastr';
//>>>>>>> main

//>>>>>>> main

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    DashboardComponent,
    SidenavComponent,
    PurchasesComponent,
    ItemsComponent,
    ConsumptionComponent,
    AddUserComponent,
    AddModalComponent,
    ConsumptionmodalComponent,
    OrderesmodalComponent,
    OrderdetailsmodalComponent,
    AddproductComponent,
    AddcategoryComponent,
    AddproductmodalComponent,
//<<<<<<< shehab-bransh
    SingInComponent,
    UserPageComponent,
//=======
//<<<<<<< shehab-bransh
  //  SingInComponent,
//=======
//>>>>>>> main
//>>>>>>> main

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // * MATERIAL IMPORTS
    MatSidenavModule,
    MatToolbarModule,
    MatMenuModule,
    MatIconModule,
    MatDividerModule,
    MatListModule,
    MatSliderModule,
    MatDialogModule,
    MaterialModule,
    NgbModule,
    HttpClientModule,
//<<<<<<< shehab-bransh
    SharedModule,
    ProductsModule
    
//=======
//<<<<<<< shehab-bransh
   // SharedModule,
   // ProductsModule
   // FormsModule, 
  //  ReactiveFormsModule
//=======
    // ToastrModule.forRoot(),
//>>>>>>> main
//>>>>>>> main
  
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
