import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Signup } from '../model/sign-up';

@Component({
  selector: 'app-sign-form',
  templateUrl: './sign-form.component.html',
  styleUrls: ['./sign-form.component.css']
})
export class SignFormComponent implements OnInit {

  signup: Signup = new Signup();

  constructor(private _httpClient: HttpClient, private _router:Router) { }

  ngOnInit(): void {
  }

  signupButton(){
    console.log(this.signup);
    this._httpClient.post('http://localhost:4000/signup', this.signup).subscribe(result => {
      console.log(result)
      alert("Signup was successfull!");
      this._router.navigate(["/login-form"])
    }, error => {
      console.error(error);
    })
  }

}
