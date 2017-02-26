import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [NavbarComponent, FooterComponent, IndexComponent],
  exports : [
    NavbarComponent,
    IndexComponent,
    FooterComponent
  ]
})
export class SharedModule { }
