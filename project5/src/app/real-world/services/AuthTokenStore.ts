import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

const AuthTokenKey = 'realWorldAuthToken';

@Injectable()
export class AuthTokenStore { // todo: move this to storage folder
    isAuthenticationValid: boolean = false;
    authenticationToken: string = '';

    private userLoggedInSource = new Subject<boolean>();
    userLoggedIn$ = this.userLoggedInSource.asObservable();

    private storage = localStorage;

    constructor() {
        this.updateAuthentication();
    }

    isAuthenticated(): boolean {
        return this.isAuthenticationValid;
    }

    getAuthenticationToken(): string {
        this.updateAuthentication();
        return this.authenticationToken;
    }

    updateAuthentication() {
        const tokenString = this.storage.getItem(AuthTokenKey);

        this.isAuthenticationValid = !!tokenString;

        if (this.isAuthenticationValid) {
            this.authenticationToken = tokenString;
        } else {
            this.resetAuthentication();
        }
    }

    setAuthentication(authenticationToken) {
        this.storage.setItem(AuthTokenKey, authenticationToken);
        this.userLoggedInSource.next(true);
    }

    resetAuthentication() {
        this.storage.removeItem(AuthTokenKey);
        this.userLoggedInSource.next(false);
    }
}
