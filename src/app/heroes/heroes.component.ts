import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit{
  heroes: Hero[] = [];
  selectedHero?: Hero;
  
  //Inject the HeroService
  constructor(private heroService: HeroService, private messageService: MessageService) {}

  //Lifecycle hook call after constructing
  ngOnInit(): void {
    console.log('initialized');
    this.getHeroes();
  }

  //Event handler
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    //this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
  }

  //Method to retrieve the heroes from the service by subscribe in HeroesComponent
  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
}
