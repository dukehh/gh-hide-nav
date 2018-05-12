import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AuthGuard} from './auth/auth.guard';
import {AuthService} from './auth/auth.service';
import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HomeComponent} from './menu/home/home.component';
import {LoginComponent} from './menu/login/login.component';
import {ContactComponent} from './menu/contact/contact.component';

import {AboutComponent} from './menu/about/about.component';
import {PortfolioComponent} from './menu/portfolio/portfolio.component';

import {ClockComponent} from './clock/clock.component';
import {NavComponent} from './navi/navbar/nav.component';
import {SidenavComponent} from './navi/sidenav/sidenav.component';

import {ModalModule} from 'ngx-modialog';
import {BootstrapModalModule} from 'ngx-modialog/plugins/bootstrap';

import './rxjs-operators';
import {FlightInstrumentComponent} from './menu/flightinstrument/flightinstrument.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    ContactComponent,
    PortfolioComponent,
    AboutComponent,
    NavComponent,
    ClockComponent,
    SidenavComponent,
    FlightInstrumentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    ModalModule.forRoot(),
    BootstrapModalModule
  ],
  providers: [
    AuthService,
    AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
