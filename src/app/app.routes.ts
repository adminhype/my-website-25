import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component'
import { HeroComponent } from './home/hero/hero.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'header', component: HeaderComponent },
];
