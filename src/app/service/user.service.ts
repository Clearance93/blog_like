import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Login } from "../model/login-form";


@Injectable()
export class UserService{

    constructor(private _httpClient: HttpClient){ }


    userPost(login: Login): Observable<Login>{
        return this._httpClient.post<Login>('http://localhost:4000/login', Login)
    }

    getUser(): Observable<Login[]>{
        return this._httpClient.get<Login[]>('http://localhost:4000/login');
    }

}