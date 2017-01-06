import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { NoContentComponent } from './no-content';

import { DataResolver } from './app.resolver';

import { LoginPage } from './account/login/login';
export const ROUTES: Routes = [
  // { path: '',      component: HomeComponent },
  { path: 'crossover',  component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // {
  //   path: 'detail', loadChildren: () => System.import('./+detail').then((comp: any) => {
  //     return comp.default;
  //   })
  //   ,
  // },
  // { path: '**',    component: NoContentComponent },

  // { path: 'login', component: LoginPage },
  { path: '**', redirectTo: 'crossover/pipeline/dashboard' }
];
