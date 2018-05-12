import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './menu/login/login.component';
import { HomeComponent } from './menu/home/home.component';
import { ContactComponent } from './menu/contact/contact.component';
import { PortfolioComponent } from './menu/portfolio/portfolio.component';
import { AboutComponent } from './menu/about/about.component';
import { ClockComponent } from './clock/clock.component';
import { FlightInstrumentComponent } from './menu/flightinstrument/flightinstrument.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'clock', component: ClockComponent },
  {
    path: 'portfolio',
    component: PortfolioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'portfolio/KuschelRock31',
    component: PortfolioComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'flightinstrument',
    component: FlightInstrumentComponent,
    canActivate: [AuthGuard]
  },
  { path: 'about', component: AboutComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
