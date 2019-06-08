import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from './components/home/home.component';

//const routes: Routes = [];
const routes: Routes = [
    {
        path: "",
        component: HomeComponent
    },
    {
        path: "account",
        loadChildren: "./real-world/modules/account/account.module#AccountModule"
    },
    {
        path: "articles",
        loadChildren: "./real-world/modules/articles/articles.module#ArticlesModule"
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
