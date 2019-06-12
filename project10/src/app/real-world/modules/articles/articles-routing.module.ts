import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArticleComponent } from './components/article/article.component';
import { ArticleListComponent } from './components/article-list/article-list.component';
import { PageMode } from '../../dto/Enums/PageMode';

const routes: Routes = [
    {
        path: '',
        component: ArticleListComponent
    },
    {
        path: 'edit/:id',
        component: ArticleComponent,
        data: {
            mode: PageMode.Edit
        }
    },
    {
        path: 'view/:id',
        component: ArticleComponent,
        data: {
            mode: PageMode.View
        }
    },
    {
        path: 'new',
        component: ArticleComponent,
        data: {
            mode: PageMode.Create
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
