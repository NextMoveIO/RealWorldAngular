import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { BaseUrlHttpInterceptor } from './real-world/services/BaseUrlHttpInterceptor';
import { RealWorldAppModule } from './real-world/real-word-app.module';
import { AccountModule } from './real-world/modules/account/account.module';
import { AuthenticationHttpInterceptor } from './real-world/services/AuthenticationHttpInterceptor';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // RealWorld
    RealWorldAppModule,
    AccountModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationHttpInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
