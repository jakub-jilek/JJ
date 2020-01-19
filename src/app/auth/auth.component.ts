import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
    selector: 'app-auth',
    templateUrl: './auth.component.html'
})
export class AuthComponent {

    authFormGroup: FormGroup;
    login = false;

    constructor() {
        this.authFormGroup = new FormGroup({
            email: new FormControl(),
            password: new FormControl()
        })
    }

    onSwitch() {
        this.login = !this.login;
    }
}