import { Component, OnInit } from '@angular/core';
import { AuthGurd } from '../service/auth.gurd';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {



  loggedIn: boolean = false;


  constructor(private _authGurd: AuthGurd) { }

  ngOnInit(): void {
    if(this._authGurd.isLoggedIn()){
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

}
