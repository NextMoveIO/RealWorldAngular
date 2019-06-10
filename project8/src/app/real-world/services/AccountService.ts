import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { HttpServiceBase } from './HttpServiceBase';
import { IUserDto } from '../dto/Interfaces/IUserDto';
import { IAuthTokenDto } from '../dto/Interfaces/IAuthTokenDto';
import { AuthTokenDto } from '../dto/Entities/AuthTokenDto';

@Injectable()
export class AccountService extends HttpServiceBase {

    constructor(httpClient: HttpClient) {
        super('/api/account', httpClient);
    }

    async register(userDto: IUserDto): Promise<IAuthTokenDto> {
      console.log('register');
      return this.post<IAuthTokenDto>("register", userDto, AuthTokenDto.fromApi);
    }

    async login(userDto: IUserDto): Promise<IAuthTokenDto> {
      console.log("login");
      return this.post<IAuthTokenDto>("login", userDto, AuthTokenDto.fromApi);
    }

    async me(): Promise<IUserDto>{
      console.log("me");
      return this.get<IUserDto>("me");
    }

}
