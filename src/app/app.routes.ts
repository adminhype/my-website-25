import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component'
import { LegalNoticeComponent } from './home/legal-notice/legal-notice.component';
import { FooterComponent } from './shared/footer/footer.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'legal-notice', component: LegalNoticeComponent },
];
