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
    coordinates = [35, 185];
    hoveredPerson: Person;
    loaded = false;
    people: Person[];
    search = '';

    getPeople(): void {
        this.loaded = false;
        this.people = [];
        this.appService.getPeople(this.search).then((people) => {
            this.loaded = true;
            this.people = people;
        });
    }

    onHover(person: Person): void {
        this.hoveredPerson = person;
    }

    onMouseLeave(): void {
        this.coordinates[0] = 35;
        this.coordinates[1] = 185;
    }

    onMouseMove(event: MouseEvent): void {
        this.coordinates[0] = event.clientX;
        this.coordinates[1] = event.clientY;

        // a bit hacky, but need to make sure the magnifying class doesn't accidentally cover the search bar
        if (event.clientY <= 160) {
            this.onMouseLeave();
        }
    }
}