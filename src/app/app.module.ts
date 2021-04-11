//Default imports
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//These import is for routing
import { AppRoutingModule } from './app-routing.module';

//Imported by angular material
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

//The name of our default/main component that we will work on
import { AppComponent } from './app.component';

//Other components that we create
import {CreateUserComponent} from './users/createUsers/create-user.component';
import {HeaderComponent} from './header/header.component';

//Custom imports
import {FormsModule} from "@angular/forms";
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {ReactiveFormsModule} from '@angular/forms';
import {MatAutocompleteModule} from '@angular/material/autocomplete'


@NgModule({
  declarations: [
    //here we are going to declare all our components
    AppComponent,
    HeaderComponent,
    CreateUserComponent

  ],
  //you have to import and export here so angular knows you want to use it
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  //It doesnt come with this section, but it doesnt work without it either ¯\_(ツ)_/¯
  exports: [
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    FormsModule,
    MatButtonModule,
    MatExpansionModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  entryComponents: [
    CreateUserComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
