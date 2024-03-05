import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
  {id: 101, name: 'Thor' },
  { id: 102, name: 'Hulk' },
  { id: 103, name: 'Ironman' },
  { id: 104, name: 'Captain America' },
  { id: 105, name: 'Sipderman' },
  { id: 106, name: 'Antman' },
  { id: 107, name: 'Dr. Starnge' },
  { id: 108, name: 'Black Panther' },
  { id: 109, name: 'Hawkey' }
    ];
    return {heroes};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 100;
  }
}