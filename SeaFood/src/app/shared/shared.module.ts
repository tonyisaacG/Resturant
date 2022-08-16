import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SelectComponent } from './components/select/select.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [NavbarComponent, SelectComponent, FooterComponent],
  imports: [
    CommonModule
  ],
  exports :[
    NavbarComponent,
    SelectComponent,
    FooterComponent
  ]
})
export class SharedModule { }
