import { Component, OnInit } from '@angular/core';
import { ArticleService } from '../../../../services/ArticleService';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  constructor(private articleService: ArticleService) { }

  async ngOnInit() {
    const articles = await this.articleService.getAll();
    console.log(articles);
  }

}
