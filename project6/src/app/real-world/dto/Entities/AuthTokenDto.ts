import { IAuthTokenDto } from "../Interfaces/IAuthTokenDto";

export class AuthTokenDto implements IAuthTokenDto {
  token?: string;

  public static fromApi(apiModel?: any): any {
    if (!apiModel) { return undefined; }
    const model: IAuthTokenDto = {};
    if (apiModel.token !== undefined) { model.token = apiModel.token; }
    return model;
  }

}
