import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ActionComponent } from './components/action/action.component';

@NgModule({
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    imports: [
        FormsModule,
        CommonModule,
        // RealWorld
    ],
    declarations: [
        ActionComponent
    ],
    exports: [
        ActionComponent
    ],
    providers: [
    ]
})
export class ControlsModule { }
