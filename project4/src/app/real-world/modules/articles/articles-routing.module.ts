import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';

const routes: Routes = [
    {
        path: '',
        component: ArticleListComponent
    },
    {
        path: 'edit/:id',
        component: ArticleComponent,
        data: {
            mode: 'edit'
        }
    },
    {
        path: 'view/:id',
        component: ArticleComponent,
        data: {
            mode: 'view'
        }
    },
    {
        path: 'new',
        component: ArticleComponent,
        data: {
            mode: 'create',
        }
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
export class ArticlesRoutingModule { }
