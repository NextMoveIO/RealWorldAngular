import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
    {
        path: '',
        component: ProfileComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: 'log-in',
        component: LoginComponent
    },
    {
        path: 'log-out',
        component: LogoutComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AccountRoutingModule { }
