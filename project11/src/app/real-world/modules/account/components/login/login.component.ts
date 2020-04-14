import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/AccountService';
import { AuthTokenStore } from '../../../../services/AuthTokenStore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailAddress: string;
  password: string;
  apiCall: boolean;

  constructor(private accountService: AccountService,
    private authTokenStore: AuthTokenStore,
    private router: Router) { }

  ngOnInit() {
  }

  async login() {
    this.apiCall = true;

    this.authTokenStore.resetAuthentication();

    const authToken = await this.accountService.login({
      emailAddress: this.emailAddress, password: this.password
    });
    console.log(authToken);

    this.authTokenStore.setAuthentication(authToken.token);

    this.router.navigate(["/"]);
  }

}
