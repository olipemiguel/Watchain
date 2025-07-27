import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
@Component({
  selector: 'app',
  imports: [RouterOutlet],
  templateUrl: '../view/app.html',
  styleUrl: '../scss/app.scss'
})
export class App {
  protected readonly title = signal('Watchain');
}
