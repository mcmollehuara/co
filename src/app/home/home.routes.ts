import { ModuleWithProviders }  from '@angular/core';
import {Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import {LayoutComponent} from '../layout/layout.component';

const routes: Routes = [{
  path: 'crossover',
  component: LayoutComponent,
  children: [
    { path: 'home', component: HomeComponent }
  ]
}];


export const appRoutingProviders: any[] = [];

export const HomeRoutes: ModuleWithProviders = RouterModule.forChild(routes);
