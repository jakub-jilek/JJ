import { HeroFormComponent } from './forms/hero-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material'  
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TableHeroesComponent } from './table-heroes/table-heroes.component';
import { FirebaseService } from './services/firebase.service';
import { AuthComponent } from './auth/auth.component';
import { AuthGuardService } from './auth/auth-guard.service';
import { UserService } from './services/user.service';

@NgModule({
  declarations: [
    AppComponent,
    TableHeroesComponent,
    AuthComponent,
    HeroFormComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule
  ],
  providers: [
    FirebaseService,
    AuthGuardService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
