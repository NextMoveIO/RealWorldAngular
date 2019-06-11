import { Component, OnInit, TemplateRef } from '@angular/core';
import { ArticleService } from '../../../../services/ArticleService';
import { IArticleDto } from '../../../../dto/Interfaces/IArticleDto';
import { PublishState } from '../../../../dto/Enums/PublishState';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { DeleteConfirmationComponent } from '../../../controls/components/delete-confirmation/delete-confirmation.component';

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.scss']
})
export class ArticleListComponent implements OnInit {

  articles: IArticleDto[];

  constructor(private router: Router, private modalService: BsModalService, private articleService: ArticleService) { }

  async ngOnInit() {
    this.readArticles();
  }

  async readArticles() {
    this.articles = await this.articleService.getAll();
    console.log(this.articles);
  }

  publishState(state: PublishState): string {
    return PublishState[state];
  }

  edit(id: number) {
    this.router.navigate(["/", "articles", "edit", id]);
  }

  view(id: number) {
    this.router.navigate(["/", "articles", "view", id]);
  }

  // delete(id: number, template: TemplateRef<any>) {
  //     console.log("delete?: ", id);
  //     const initialState = { id };
  //     this.modalRef = this.modalService.show(template, { initialState });
  // }

  deleteArticle(id: number) {
    const initialState = { id };
    const modalRef = this.modalService.show(DeleteConfirmationComponent, { initialState });
    const deleteConfirmationComponent = modalRef.content as DeleteConfirmationComponent;
    if (deleteConfirmationComponent !== undefined) {
      deleteConfirmationComponent.setCallbacks((x: number) => this.onConfirmDelete(x), () => { });
    }
  }

  async onConfirmDelete(id: number) {
    console.log("delete confirmed. ", id);
    await this.articleService.delete(id.toString());
    await this.readArticles();
  }

}
