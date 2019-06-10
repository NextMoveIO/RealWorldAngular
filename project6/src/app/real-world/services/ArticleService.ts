import { HttpClient } from '@angular/common/http';
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

    async getAll(): Promise<IPagedResponse<IArticleDto>> {
      console.log('get all');
      return this.get<IPagedResponse<IArticleDto>>("", null, ArticleDto.fromApiArray);
    }
}
