import { Component, Injector, OnDestroy, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { NavService } from 'src/app/service/nav.service';
import { UserStorageService } from 'src/app/service/user-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy{

  isInputted = false;
  loginForm!: FormGroup;
  isError = false;
  errorMsg!:string;
  switchKey = 'password';

  password = new FormControl();
  subscriptionKey: Subscription;
  authService: AuthService;
  navService: NavService;
  tokenService: UserStorageService;
  subscriptionLogin!: Subscription;

  constructor(private inject: Injector,
              private fb: FormBuilder,
              private router: Router) {
                this.authService = this.inject.get(AuthService);
                this.navService = this.inject.get(NavService);
                this.tokenService = this.inject.get(UserStorageService);
    this.errorMsg = 'Please provide a valid username and password.';
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // set password hide and show text;
    this.subscriptionKey = this.loginForm.controls.password.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged()
    ).subscribe(
      key => {
        if (key !== ''){
          this.isInputted = true;
        } else {
          this.isInputted = false;
        }
      }
    )
   }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.subscriptionLogin) { this.subscriptionLogin.unsubscribe(); }
    if(this.subscriptionKey){ this.subscriptionKey.unsubscribe(); }
  }

  submitBtn(){
    const username = this.loginForm.value.username;
    const password = this.loginForm.value.password;
    this.subscriptionLogin = this.authService.login(username, password).subscribe(
      res => {
        const user = res.user;
        let token = user?.tokenId?.token;
        if(!(!!token)){
          token = '';
        }
        this.tokenService.saveToken(res.jwt);
        this.tokenService.saveUserLocal(
          {
            email: user.email,
            id: user.id,
            provide: user.local,
            username: user.username,
            createdAt: user.createdAt,
            token: token
          }
        );
        this.tokenService.saveUser({
          email: user.email,
          id: user.id,
          provide: user.local,
          username: user.username,
          createdAt: user.createdAt,
          token: token
        });
        this.navService.changeNav(true);
        this.isError = false;
        this.router.navigate(['']);
      }, err => { 
        this.isError = true;
        this.loginForm.patchValue({
          password: ''
        });
        this.navService.changeNav(false);
        });
  }

  switchBtn(){
    if(this.switchKey !== 'password'){
      this.switchKey = 'password';
    }else {
      this.switchKey = 'text';
    }
  }

}
