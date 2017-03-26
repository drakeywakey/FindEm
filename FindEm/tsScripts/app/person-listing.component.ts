import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'person-listing',
    templateUrl: './tsScripts/app/person-listing.component.html',
    styleUrls: ['./tsScripts/app/person-listing.component.css']
})
export class PersonListingComponent {
    @Input() person: Person
}