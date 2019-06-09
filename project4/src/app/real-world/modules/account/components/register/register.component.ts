import { Component, OnInit } from '@angular/core';
import { AccountService } from '../../../../services/AccountService';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    constructor(private accountService: AccountService) { }

    ngOnInit() {
    }

    async register() {
      const token = await this.accountService.register({
        emailAddress: "a@a.com", password: "password"
      });
      console.log("Token obtainted: ", token);
    }

}
