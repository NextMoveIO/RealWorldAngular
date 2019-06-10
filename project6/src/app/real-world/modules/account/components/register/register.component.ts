import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from '../../../../services/AccountService';
import { AuthTokenStore } from '../../../../services/AuthTokenStore';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  emailAddress: string;
  password: string;
  apiCall: boolean;

  constructor(private accountService: AccountService,
    private authTokenStore: AuthTokenStore,
    private router: Router) { }

  ngOnInit() {
  }

  async register() {
    this.apiCall = true;

    this.authTokenStore.resetAuthentication();

    const authToken = await this.accountService.register({
      emailAddress: this.emailAddress,
      password: this.password
    });
    console.log("authtoken: ", authToken);

    this.authTokenStore.setAuthentication(authToken.token);

    this.router.navigate(["/"]);
  }

}
