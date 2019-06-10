import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../services/ArticleService';
import { IArticleDto } from '../../../../dto/Interfaces/IArticleDto';
import { PublishState } from '../../../../dto/Enums/PublishState';
import { Router } from '@angular/router';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: IArticleDto[];

  constructor(private router: Router, private articleService: ArticleService) { }

  async ngOnInit() {
    this.articles = await this.articleService.getAll();
    console.log(this.articles);
  }

  publishState(state: PublishState): string {
    return PublishState[state];
  }

  edit(id: number) {
    this.router.navigate(["/", "articles","edit", id]);
  }

  view(id: number) {
    this.router.navigate(["/", "articles","view", id]);
  }

  delete(id: number) {
    console.log("delete?: ", id);
  }

}
