import { HttpClient } from '@angular/common/http';
import { Hero } from '../models/hero.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class FirebaseService {

    constructor(private http: HttpClient) {}

    saveHero(hero: Hero) {
        return this.http.post('https://hero-creater-b7d89.firebaseio.com/heroes.json', hero);
    }

    getHeroes() {
        return this.http.get< { [key: string]: Hero} >('https://hero-creater-b7d89.firebaseio.com/heroes.json')
            .pipe(
                map( responseData => {
                    const heroArray: Hero[] = [];
                    for (const key in responseData) {
                        if(responseData.hasOwnProperty(key)) {
                            heroArray.push({ ...responseData[key], id: key });
                        }
                    }
                    return heroArray;
                })
            )
    }

}