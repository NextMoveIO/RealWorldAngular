import { PublishState } from "../Enums/PublishState";

export interface IArticleDto {
  id?: number;
  state?: PublishState;
  title?: string;
  content?: string;
  visibleFrom?: Date | string;
}
