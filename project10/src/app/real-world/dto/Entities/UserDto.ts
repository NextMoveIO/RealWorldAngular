import { IUserDto } from "../Interfaces/IUserDto";

export class UserDto implements IUserDto {
    id?: number;
    emailAddress?: string;
    password?: string;
    firstName?: string;
    lastName?: string;

    public static toApi(model?: IUserDto): any {
        if (!model) { return undefined; }
        const apiModel: IUserDto = {};
        if (model.id !== undefined) { apiModel.id = model.id; }
        return apiModel;
    }

    public static toApiArray(models?: IUserDto[] | undefined): any[] | undefined {
        let apiModels;
        if (models && models instanceof Array) {
            apiModels = models.map((item) => UserDto.toApi(item));
        }
        return apiModels;
    }

    public static fromApi(apiModel?: any): any {
        if (!apiModel) { return undefined; }
        const model: IUserDto = {};
        if (apiModel.id !== undefined) { model.id = apiModel.id; }
        return model;
    }

    public static fromApiArray(apiModels?: any[] | undefined): any[] | undefined {
        let models;
        if (apiModels && apiModels instanceof Array) {
            models = apiModels.map((item) => UserDto.fromApi(item));
        }
        return models;
    }
}
