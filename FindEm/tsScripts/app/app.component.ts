﻿import { Component } from '@angular/core';
import { Person } from './person';
import { AppService } from './app.service';

@Component({
    providers: [AppService],
    selector: 'my-app',
    template: `    
    <input type="text" [(ngModel)]="search" />
    <button (click)="getPeople()">Click me!</button>
    <ul>
      <li *ngFor="let person of people">
        <img src="{{ person.ImagePath }}" />
        <p>{{ person.FirstName }}</p>
      </li>
    </ul>
  `
})
export class AppComponent {
    constructor(private appService: AppService) { }
    search = '';
    people: Person[];

    getPeople(): void {
        this.appService.getPeople(this.search).then(people => this.people = people);
        console.log(this.people);
    }
}