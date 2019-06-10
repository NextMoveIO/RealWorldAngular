// TODO: Auto-generate these from server-side model code

import { IArticleDto } from "../Interfaces/IArticleDto";
import { PublishState } from "../Enums/PublishState";

export class ArticleDto implements IArticleDto {
  id?: number;
  state?: PublishState;
  title?: string;
  content?: string;
  visibleFrom?: Date | string;

  public static fromApi(apiModel?: any): any {
    if (!apiModel) { return undefined; }
    const model: IArticleDto = {};
    if (apiModel.id !== undefined) { model.id = apiModel.id; }
    if (apiModel.title !== undefined) { model.title = apiModel.title; }
    if (apiModel.content !== undefined) { model.content = apiModel.content; }
    if (apiModel.state !== undefined) { model.state = apiModel.state; }
    return model;
  }

  public static fromApiArray(apiModels?: any[] | undefined): any[] | undefined {
    let models;
    if (apiModels && apiModels instanceof Array) {
      models = apiModels.map((item) => ArticleDto.fromApi(item));
    }
    return models;
  }

}
