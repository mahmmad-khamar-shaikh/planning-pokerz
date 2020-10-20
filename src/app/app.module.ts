import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';


/** Angular Fire / FireBase Dependency  */

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AppMaterialModule } from './app-material.module';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AvtarComponent } from './components/avtar/avtar.component';
import { TeamComponent } from './components/team/team.component';
import { CeremonyComponent } from './components/ceremony/ceremony.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { RetroDashboardComponent } from './components/retro-dashboard/retro-dashboard.component';
import { ScrumDashboardComponent } from './components/scrum-dashboard/scrum-dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    LoginContainerComponent,
    PageNotFoundComponent,
    AvtarComponent,
    TeamComponent,
    CeremonyComponent,
    AdminDashboardComponent,
    RetroDashboardComponent,
    ScrumDashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'aungular-auth-firebase'),
    AngularFireDatabaseModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    AppMaterialModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
