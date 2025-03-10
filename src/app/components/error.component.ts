import { Component, Input } from '@angular/core';

@Component({
  selector: 'MainError',
  standalone: false,
  templateUrl: '../page/plugin/error.component.html',
  styleUrl: '../page/scss/plugin/error.component.scss'
})
export class ErrorComponent {
  active : string = '404';
}
