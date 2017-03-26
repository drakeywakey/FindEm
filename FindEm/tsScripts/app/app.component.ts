import { Component } from '@angular/core';
import { Person } from './person';
import { AppService } from './app.service';

@Component({
    providers: [AppService],
    selector: 'my-app',
    templateUrl: './tsScripts/app/app.component.html',
    styleUrls: ['./tsScripts/app/app.component.css']
})

export class AppComponent {
    constructor(private appService: AppService) { }
    hoveredPerson: Person;
    loaded = false;
    people: Person[];
    search = '';

    getPeople(): void {
        this.loaded = false;
        this.appService.getPeople(this.search).then((people) => {
            this.loaded = true;
            this.people = people;
        });
    }

    onHover(person: Person): void {
        this.hoveredPerson = person;
    }
}