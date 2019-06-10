import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { PageMode } from '../../../../dto/Enums/PageMode';
import { PublishState } from '../../../../dto/Enums/PublishState';
import { ArticleService } from '../../../../services/ArticleService';
import { IArticleDto } from '../../../../dto/Interfaces/IArticleDto';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  Mode = PageMode;
  State = PublishState;

  pageMode: PageMode;

  article: IArticleDto = {};

  loading: boolean;
  loadError: boolean;
  saveError: boolean;
  saveSuccess: boolean;

  constructor(private router: Router, private route: ActivatedRoute, private articleService: ArticleService) { }

  async ngOnInit() {
    this.pageMode = this.route.snapshot.data['mode'];
    if (this.pageMode !== PageMode.Create) {
      // read the article
      this.loading = true;

      const sid = this.route.snapshot.params["id"];
      const id = parseInt(sid, 10);

      this.article = await this.articleService.getById(id);
      this.loading = true;

      console.log(this.article);
    }
    console.log(this.pageMode);
  }

  async create() {
    this.saveError = false;
    const article = await this.articleService.create({
      title: this.article.title,
      content: this.article.content,
      state: PublishState.Draft
    });
    this.saveError = (article === undefined);
    this.saveSuccess = (article !== undefined);

    console.log(article);
    console.log(this.saveError);
    console.log(this.saveSuccess);

    if (article !== undefined) {
      this.router.navigate(["/", "articles", "edit", article.id]);
    }

  }

  async publish() {

  }

  async update() {

  }

  async delete() {

  }

}
