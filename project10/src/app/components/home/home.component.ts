import { Component, OnInit } from '@angular/core';
import { IUserDto } from '../../real-world/dto/Interfaces/IUserDto';
import { AccountService } from '../../real-world/services/AccountService';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  userDto: IUserDto;

  constructor(private accountService: AccountService) { }

  async ngOnInit() {
    this.userDto = await this.accountService.me();
  }

}
