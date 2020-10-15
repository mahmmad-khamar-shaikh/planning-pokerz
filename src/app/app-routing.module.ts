import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AvtarComponent } from './components/avtar/avtar.component';
import { CeremonyComponent } from './components/ceremony/ceremony.component';
import { HomeComponent } from './components/home/home.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { TeamComponent } from './components/team/team.component';

const loginScreenChildren: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: '', component: LoginComponent }];
const homeScreenChildren: Routes = [
  { path: 'avtar', component: AvtarComponent },
  { path: 'team', component: TeamComponent },
  { path: 'ceremony', component: CeremonyComponent },
  { path: '', redirectTo: 'team', pathMatch: 'full' }
];

const routes: Routes = [
  { path: 'login', component: LoginContainerComponent, children: loginScreenChildren },
  { path: 'home', component: HomeComponent, children: homeScreenChildren },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}


