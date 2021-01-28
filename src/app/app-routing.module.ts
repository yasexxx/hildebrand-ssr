import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './core/main/main.component';
import { LoginAndSignupAuthGuard } from './guard/auth-guard';
import { AccountSettingsComponent } from './pages/account-settings/account-settings.component';
import { MyAccountComponent } from './pages/my-account/my-account.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'login', loadChildren: () => import('./pages/login/login.module').then(m => m.LoginModule), canLoad: [ LoginAndSignupAuthGuard] }, 
  { path: 'signup', loadChildren: () => import('./pages/signup/signup.module').then(m => m.SignupModule), canLoad: [LoginAndSignupAuthGuard] },
  { path: 'my-account', component: MyAccountComponent},
  { path: 'account-settings', component: AccountSettingsComponent },
  { path: '**', redirectTo: '', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
