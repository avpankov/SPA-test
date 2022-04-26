import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivesComponent } from './directives-page/directives.component';
import { FormsRComponent } from './forms-r-page/forms-r.component';
import { FormsTdComponent } from './forms-td-page/forms-td.component';
import { HomeComponent } from './home-page/home.component';
import { PipesComponent } from './pipes-page/pipes.component';
import { ServicesComponent } from './services-page/services.component';
import { UsersComponent } from './users-page/users/users.component';

const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'users', component: UsersComponent},
  {path:'directives', component: DirectivesComponent},
  {path:'pipes', component: PipesComponent},
  {path:'services', component: ServicesComponent},
  {path:'form-td', component: FormsTdComponent},
  {path:'form-r', component: FormsRComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
