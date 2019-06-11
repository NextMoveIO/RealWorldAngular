import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { ArticleService } from '../../services/ArticleService';
import { ControlsModule } from '../controls/controls.module';
import { DeleteConfirmationComponent } from '../controls/components/delete-confirmation/delete-confirmation.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    FormsModule,
    CommonModule,
    // RealWorld
    ControlsModule,
    ArticlesRoutingModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ],
  exports: [
    ArticleComponent
  ],
  providers: [
    ArticleService
  ]
})
export class ArticlesModule { }
