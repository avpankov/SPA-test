import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './users-page/users/users.component';
import { UserComponent } from './users-page/user/user.component';
import { AddFormComponent } from './users-page/add-form/add-form.component';
import { HomeComponent } from './home-page/home.component';
import { DirectivesComponent } from './directives-page/directives.component';
import { BackgroundDirective } from './directives-page/background.directive';
import { PipesComponent } from './pipes-page/pipes.component';
import { FilterPipe } from './pipes-page/filter.pipe';
import { ServicesComponent } from './services-page/services.component';
import { FormsTdComponent } from './forms-td-page/forms-td.component';
import { FormsRComponent } from './forms-r-page/forms-r.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    AddFormComponent,
    HomeComponent,
    DirectivesComponent,
    BackgroundDirective,
    PipesComponent,
    FilterPipe,
    ServicesComponent,
    FormsTdComponent,
    FormsRComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
