import { bootstrapApplication } from '@angular/platform-browser';
import { config } from './app/base/app.config.server';
import { AppComponent } from './app/components/app.component';

const bootstrap = () => bootstrapApplication(AppComponent, config);

export default bootstrap;
