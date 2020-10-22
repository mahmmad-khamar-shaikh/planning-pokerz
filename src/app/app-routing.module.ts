import { Route } from '@angular/compiler/src/core';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AvtarComponent } from './components/avtar/avtar.component';
import { CeremonyComponent } from './components/ceremony/ceremony.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { LimitedDashboardComponent } from './components/limited-dashboard/limited-dashboard.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { LoginComponent } from './components/login/login.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RetroDashboardComponent } from './components/retro-dashboard/retro-dashboard.component';
import { ScrumDashboardComponent } from './components/scrum-dashboard/scrum-dashboard.component';
import { TeamComponent } from './components/team/team.component';

const loginScreenChildren: Routes = [
  { path: 'signin', component: LoginComponent },
  { path: '', component: LoginComponent }];
const homeScreenChildren: Routes = [
  { path: 'avtar', component: AvtarComponent },
  { path: 'team', component: TeamComponent },
  { path: 'ceremony', component: CeremonyComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'dashboard-admin', component: AdminDashboardComponent },
  { path: 'retro-dashboard', component: RetroDashboardComponent },
  { path: 'scrum-dashboard', component: ScrumDashboardComponent },
  { path: 'dashboard-limited', component: LimitedDashboardComponent },
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


