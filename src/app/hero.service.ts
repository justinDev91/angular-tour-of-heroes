import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './heroes/mock-heroes';
import { MessageService } from './message.service';
// This marks the class as one that participates in the dependency injection system.
@Injectable({
  providedIn: 'root'
})
export class HeroService {

  //Inject messageService
  constructor(private messageService: MessageService) { }

  //Observable is one of the key classes in the RxJS library
  getHeroes(): Observable<Hero[]> {
    const heroes = of(HEROES);
    this.messageService.add('HeroService: fetched heroes');
    return heroes;
  }
}
