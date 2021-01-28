import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './core/intro/intro.component';
import { MainComponent } from './core/main/main.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { SharedModule } from './shared/shared.module';
import { MyAccountComponent } from './pages/my-account/my-account.component';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { FormsModule } from '@angular/forms';
import { TestimonialComponent } from './component/testimonial/testimonial.component';
import { CommonModule } from '@angular/common';
import { OurTeamComponent } from './component/our-team/our-team.component';
import { BrowserStateInterceptor } from './interceptor/browser-state.inteceptor';
import { AuthInterceptor } from './interceptor/auth-browser.interceptor';
import { TopbarComponent } from './core/topbar/topbar.component';
import { HeaderComponent } from './core/header/header.component';
import { ClientsComponent } from './component/clients/clients.component';
import { ContactComponent } from './component/contact/contact.component';
import { PortfolioComponent } from './component/portfolio/portfolio.component';
import { ServicesComponent } from './component/services/services.component';
import { AboutComponent } from './component/about/about.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    MainComponent,
    MyAccountComponent,
    AccountSettingsComponent,
    TestimonialComponent,
    OurTeamComponent,
    TopbarComponent,
    HeaderComponent,
    AboutComponent,
    ClientsComponent,
    ContactComponent,
    PortfolioComponent,
    ServicesComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    CommonModule,
    HttpClientModule,
    BrowserTransferStateModule,
    SharedModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BrowserStateInterceptor, multi: true},
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: 'BASE_URL', useFactory: getBaseUrl }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


export function getBaseUrl() {
  return environment.API_URL;
}