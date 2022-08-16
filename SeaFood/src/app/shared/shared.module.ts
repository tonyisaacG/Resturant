import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectComponent } from './components/select/select.component';

@NgModule({
  declarations: [NavbarComponent, SelectComponent],
  imports: [
    CommonModule
  ],
  exports :[
    NavbarComponent,
    SelectComponent  
  ]
})
export class SharedModule { }
