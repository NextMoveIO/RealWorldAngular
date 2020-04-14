import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ActionComponent } from './components/action/action.component';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    FormsModule,
    CommonModule,
    // ngx-bootstrap
    ModalModule,
    // RealWorld
  ],
  declarations: [
    ActionComponent,
    DeleteConfirmationComponent
  ],
  exports: [
    ActionComponent,
    DeleteConfirmationComponent
  ],
  providers: [
  ]
})
export class ControlsModule { }
