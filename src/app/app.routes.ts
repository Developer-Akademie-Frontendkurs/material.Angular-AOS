import { Routes } from '@angular/router';
import { MainpageComponent } from './pages/mainpage/mainpage.component';
import { ImprintComponent } from './pages/imprint/imprint.component';

export const routes: Routes = [
  { path: '', component: MainpageComponent },
  { path: 'imprint', component: ImprintComponent },
];
