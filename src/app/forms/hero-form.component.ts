import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Hero } from '../models/hero';
import { FirebaseService } from '../services/firebase.service';

@Component({
    selector: 'app-hero-form',
    templateUrl: './hero-form.component.html'
})
export class HeroFormComponent {
  formGroup: FormGroup;
  heroes: Hero[] = [];

  isAuthenticated = false;

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