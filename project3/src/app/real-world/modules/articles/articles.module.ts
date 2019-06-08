import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
// import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

@NgModule({
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    FormsModule,
    CommonModule,
    // KeystoneModule
    ArticlesRoutingModule
  ],
  declarations: [
    ArticleComponent,
    ArticleListComponent
  ],
  exports: [
    ArticleComponent
  ]
})
export class ArticlesModule { }
