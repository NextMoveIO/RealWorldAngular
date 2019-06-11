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

    async getAll(): Promise<IArticleDto[]> {
      console.log('get all');
      return this.get<IArticleDto[]>("", null, ArticleDto.fromApiArray);
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
