import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Hero } from '../models/hero';

@Component({
  selector: 'table-heroes',
  templateUrl: './table-heroes.component.html'
})
export class TableHeroesComponent implements OnInit, OnChanges {

  @Input() heroes: Hero[];

  displayedColumns: string[] = ['name', 'alias', 'ability', 'photo'];
  dataSource;
  
  constructor() { }

  ngOnInit() {
  }

  show() {
    console.log(this.heroes);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(this.heroes) {
      this.dataSource = this.heroes;
    }
  }
}
