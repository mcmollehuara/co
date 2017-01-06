import { NgModule } from '@angular/core';
import { HomeComponent }   from './home.component';
import { HomeRoutes }   from './home.routes';

@NgModule({
    imports: [HomeRoutes],
    exports: [],
    declarations: [HomeComponent],
    providers: [],
})
export class HomeModule { }
