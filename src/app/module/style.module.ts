import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextColorService } from '../service/text-color.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [TextColorService],
  exports: []
})
export class StyleModule { }
