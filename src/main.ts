import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/components/app.component';
import { appConfig } from './app/base/app.config';

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
