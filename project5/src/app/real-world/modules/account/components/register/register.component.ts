import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/AccountService';
import { AuthTokenStore } from '../../../../services/AuthTokenStore';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private accountService: AccountService, private authTokenStore: AuthTokenStore) { }

    ngOnInit() {
    }

    async register() {
        this.authTokenStore.resetAuthentication();

        const authToken = await this.accountService.register({
            emailAddress: "user@domain4.com", password: "password"
        });

        this.authTokenStore.setAuthentication(authToken.token);
    }

}
