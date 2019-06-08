import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//const routes: Routes = [];
const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
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
