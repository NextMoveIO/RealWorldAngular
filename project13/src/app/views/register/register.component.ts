import { Component } from '@angular/core';
import { AccountService } from '../../real-world/services/AccountService';
import { Router } from '@angular/router';
import { AuthTokenStore } from '../../real-world/services/AuthTokenStore';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'register.component.html'
})
export class RegisterComponent {

  emailAddress: string;
  password: string;

  constructor(private accountService: AccountService,
    private authTokenStore: AuthTokenStore,
    private router: Router) { }

  async register() {
    console.log("Register");

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
