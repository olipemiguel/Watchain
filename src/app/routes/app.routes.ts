import { Routes } from '@angular/router';
import { UpdateSoftwareComponent } from '../components/updateSoftware.component';
import { RootComponent } from '../components/root.component';

export const routes: Routes = [
  { path: 'update', pathMatch: 'full', component: UpdateSoftwareComponent},
  { path: '', pathMatch: 'full', redirectTo: 'update' },
  { path: 'ia', pathMatch: 'full', component: RootComponent},
];
