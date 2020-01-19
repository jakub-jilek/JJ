import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { FirebaseService } from './services/firebase.service';
import { Hero } from './models/hero.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  formGroup: FormGroup;
  heroes: Hero[] = [];

  constructor(private fs: FirebaseService) {
    this.formGroup = new FormGroup({
      name: new FormControl("", Validators.required),
      alias: new FormControl("", Validators.required),
      ability: new FormControl("", Validators.required),
      photo: new FormControl("", Validators.required)
    });
  }

  onCreate() {
    const hero = (this.formGroup.value as Hero);
    this.fs.saveHero(hero)
    .subscribe(hero => {
      console.log(hero);
      this.fetchHeroes();
    });

    this.formGroup.reset();
  }
  
  fetchHeroes() {
    this.fs.getHeroes()
    .subscribe(heroArray => { 
      this.heroes = heroArray;
    });
  }

  onSubmit() {
    console.log(this.formGroup);
  }

  onCancel() {
    this.formGroup.reset();
  }

  onDelete() {
    this.heroes = [];
  }


  
}
