import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
    {
        path: 'articles/edit/:id',
        component: ArticleComponent,
        data: {
            mode: 'edit'
        }
    },
    {
        path: 'articles/view/:id',
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
