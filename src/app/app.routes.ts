import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LegalNoticeComponent } from './home/legal-notice/legal-notice.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
  { path: 'home', component: HomeComponent }
];
