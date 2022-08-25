import { Component, OnInit } from '@angular/core';
import { User } from '../model/user.model';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private service: UserService) { }

  users: User[];
  name = "";
  role = "";

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.service.getUsers().toPromise().then((res: any) => {
      this.users = res;
    })
  }

  createUser() {
    var newUser = new User;
    newUser.name = this.name;
    newUser.role = this.role;
    this.name = "";
    this.role = "";

    this.service.createUser(newUser).then(res => {
      this.getUsers();
    })
  }

}
