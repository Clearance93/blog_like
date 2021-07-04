import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from '../model/login-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {


  login: Login = new Login();

  constructor(private _httpClient: HttpClient, private _router:Router) { }

  ngOnInit(): void {
    this._httpClient.get('http://localhost:3000/login').subscribe(result => {
      console.log(result);
    }, error => {
      console.error(error);
    })
  }

  loginVelidation(){
    console.log(this.login);
    this._httpClient.post('http://localhost:4000/login', this.login).subscribe(result => {
      console.log(result);
      alert("Login registration successfull");
      this._router.navigate(["/login-velidation"]);
    }, error => {
      console.error(error);
    })
  }
}
