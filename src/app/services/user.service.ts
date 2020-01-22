import { environment } from './../../environments/environment';
import { User } from '../models/user';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface AuthResponseData {
    idToken: string,
    email: string,
    refreshToken: string,
    expiresln: string,
    localId: string,
    registered?: string
}

@Injectable()
export class UserService {

    constructor(private http: HttpClient) {}
    
    signup(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=' + environment.firebaseApiKey,
        {
            email,
            password,
            returnSecureToken: true
        });
    }

    login(email: string, password: string) {
        return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseApiKey,
        {
            email,
            password,
            returnSecureToken: true
        })
    }
}