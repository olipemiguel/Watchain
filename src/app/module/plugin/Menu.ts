import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from '../../components/plugin/Menu/Menu';
import { LogoComponent } from '../../components/plugin/logo/logo';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuComponent,
    LogoComponent
  ],
  exports:[
    MenuComponent,
    LogoComponent
  ]
})
export class PluginModule { }
