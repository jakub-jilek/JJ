import { UserService, AuthResponseData } from './../services/user.service';
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    authFormGroup: FormGroup;
    login: boolean;

    constructor(private userService: UserService, private router: Router) {
        this.authFormGroup = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        })

    }

    onSwitch() {
        this.login = !this.login;
    }

    onSubmit() {
        if (this.authFormGroup.invalid) {
            return;
        }

        let authObs: Observable<AuthResponseData>;

        const email = this.authFormGroup.value.email;
        const password = this.authFormGroup.value.password;

        if (this.login) {
            authObs = this.userService.login(email, password);
        } else {
            authObs = this.userService.signup(email, password);
        }
        authObs.subscribe(resData => {
            console.log(resData);
            this.router.navigate(['/form']);
        });
    }
}