import { Component, Injector, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { AuthService } from 'src/app/service/auth.service';
import { NavService } from 'src/app/service/nav.service';
import { UserStorageService } from 'src/app/service/user-storage.service';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit, OnDestroy {
  isInputted = false;
  signUpForm!: FormGroup;
  switchKey = 'password';
  isError = false;
  isSubmitted = false;
  navService: NavService;
  tokenService: UserStorageService;
  authService: AuthService;
  subscriptionPass!: Subscription;
  subscriptionReg!: Subscription;
  constructor(private fb: FormBuilder,
              private inject: Injector,
              private router: Router) { 
                this.navService = this.inject.get(NavService);
                this.tokenService = this.inject.get(UserStorageService);
                this.authService = this.inject.get(AuthService);
    this.signUpForm = this.fb.group({
      email: ['', Validators.required],
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    this.subscriptionPass = this.signUpForm.controls.password.valueChanges.pipe(
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
    );
    
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    if(this.subscriptionPass){ this.subscriptionPass.unsubscribe(); }
    if(this.subscriptionReg) { this.subscriptionReg.unsubscribe(); }
  }

  switchBtn(){
    if(this.switchKey !== 'password'){
      this.switchKey = 'password';
    }else {
      this.switchKey = 'text';
    }
  }

  submitBtn(){
    const email = this.signUpForm.value.email;
    const username = this.signUpForm.value.username;
    const password = this.signUpForm.value.password;
    this.subscriptionReg = this.authService.register(email,username,password).subscribe(
      res => {
        const user = res.user;
        this.tokenService.saveToken(res.jwt);
        this.tokenService.saveUserLocal({
          email: user.email,
          id: user.id,
          provide: user.local,
          username: user.username,
          createdAt: user.createdAt,
          token: ''
        });
        this.tokenService.saveUser({
          email: user.email,
          id: user.id,
          provide: user.local,
          username: user.username,
          createdAt: user.createdAt,
          token: ''
        });
        this.navService.changeNav(true);
        this.isError = false;
        this.router.navigate(['']);
      }, err => { 
        this.isError = true;
        this.signUpForm.patchValue({
          password: ''
        });
        this.navService.changeNav(false);
        });
  }

}
