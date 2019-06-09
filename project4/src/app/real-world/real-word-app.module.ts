import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';
import { BaseUrlHttpInterceptor } from './services/BaseUrlHttpInterceptor';

@NgModule({
    schemas: [
    ],
    imports: [
        HttpClientModule
    ],
    declarations: [
    ],
    exports: [
    ],
    providers: [
        BaseUrlHttpInterceptor
    ]
})
export class RealWorldAppModule { }
