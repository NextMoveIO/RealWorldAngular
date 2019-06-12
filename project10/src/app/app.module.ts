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
import { ModalModule } from 'ngx-bootstrap/modal';
import { DeleteConfirmationComponent } from './real-world/modules/controls/components/delete-confirmation/delete-confirmation.component';
import { ControlsModule } from './real-world/modules/controls/controls.module';
import { PaginationModule } from 'ngx-bootstrap/pagination';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    //ngx-bootstrap
    ModalModule.forRoot(),
    PaginationModule.forRoot(),
    // RealWorld
    RealWorldAppModule,
    AccountModule,
    ControlsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlHttpInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthenticationHttpInterceptor, multi: true },
  ],
  entryComponents: [
    DeleteConfirmationComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
