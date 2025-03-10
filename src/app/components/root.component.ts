import { Component } from '@angular/core';
import { RootModule } from '../module/root.module';
@Component({
  selector: 'MainRoot',
  standalone: true,
  imports: [RootModule],
  templateUrl: '../page/plugin/root.component.html',
  styleUrl: '../page/scss/plugin/root.component.scss'
})
export class RootComponent {

}
