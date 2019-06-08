import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

import { AccountRoutingModule } from './account-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        FormsModule,
        CommonModule,
        // KeystoneModule
        AccountRoutingModule
    ],
    declarations: [
        ProfileComponent,
        RegisterComponent,
        LoginComponent,
        LogoutComponent],
    exports: [
    ]
})
export class AccountModule { }
