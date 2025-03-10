import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainHeaderComponent } from '../components/mainHeader.component';
import { MainFooterComponent } from '../components/mainFooter.component';
import { ErrorComponent } from '../components/error.component';
@NgModule({
  declarations: [
    MainHeaderComponent,
    MainFooterComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    MainHeaderComponent,
    MainFooterComponent,
    ErrorComponent
  ]
})
export class RootModule { }
