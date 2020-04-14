import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpServiceBase } from './HttpServiceBase';
import { IPagedResponse } from '../dto/Interfaces/IPagedResponse';
import { IArticleDto } from '../dto/Interfaces/IArticleDto';
import { ArticleDto } from '../dto/Entities/ArticleDto';

@Injectable()
export class ArticleService extends HttpServiceBase {

  constructor(httpClient: HttpClient) {
    super('/api/articles', httpClient);
  }

  async getCount(): Promise<number> {
    console.log('get count');
    return this.get<number>("count", null, undefined);
  }

  async getAll(skip: number, take: number): Promise<IArticleDto[]> {
    console.log('get all');
    const httpParams = new HttpParams()
      .append("skip", skip.toString())
      .append("take", take.toString());
    return this.get<IArticleDto[]>("", httpParams, ArticleDto.fromApiArray);
  }

  async getById(id: number): Promise<IArticleDto> {
    console.log("get by id:", id);
    return this.get<IArticleDto>(id.toString());
  }

  async create(article: IArticleDto): Promise<IArticleDto> {
    console.log("create article");
    return this.post<IArticleDto>("", article, ArticleDto.fromApi);
  }
}
