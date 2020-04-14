import { Component, OnInit } from '@angular/core';
import { AuthTokenStore } from '../../../../services/AuthTokenStore';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private authTokenStore: AuthTokenStore,
    private router: Router) { }

  ngOnInit() {
    this.authTokenStore.resetAuthentication();

    this.router.navigate(["/"]);
  }

}
