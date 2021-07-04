import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login-form';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-login-velidation',
  templateUrl: './login-velidation.component.html',
  styleUrls: ['./login-velidation.component.css'],
  providers: [UserService]
})
export class LoginVelidationComponent implements OnInit {

  login: Login = new Login();

  userList: Array<Login> = [];
  static userList: Login;

  constructor(private _router:Router, private _userService:UserService) { }

  ngOnInit(): void {
  }

  loginIn(){
    this._userService.getUser().subscribe(result => {
      this.userList = result;
      for (let loger of this.userList) {
        if(loger.username === this.login.username && loger.password === this.login.password){
          alert("You're successfully logged in!");
          localStorage.setItem('isLoggedin', "true");
          localStorage.setItem('login', this.login.username);
          localStorage.setItem('login', this.login.password);
          this._router.navigate(['/home']);
        } else {
          alert("Incorrect username or password");
          // this._router.navigate(['/login-velidation'])
        }
      }
    }, (error) => {
      console.error(error);
    })
  }

}
