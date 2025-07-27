import { Component } from '@angular/core';
import { PluginModule } from '../../module/plugin/Menu';
@Component({
  selector: 'Main',
  imports: [PluginModule],
  templateUrl: '../../view/main/main.html',
  styleUrl: '../../scss/main/main.scss'
})
export class MainComponent {

}
