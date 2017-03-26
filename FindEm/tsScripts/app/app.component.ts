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
    search = '';
    people: Person[];

    getPeople(): void {
        this.appService.getPeople(this.search).then(people => this.people = people);
    }
}