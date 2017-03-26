import { Component, Input } from '@angular/core';
import { Person } from './person';

@Component({
    selector: 'person-listing',
    template: `    
    <img src="{{ person.ImagePath }}" />
    <h3>{{ person.FirstName + ' ' + person.LastName }}</h3>
    <p>{{ person.Age }} years old</p>
    <p>Address: {{ person.Address }}</p>
    <p>Interests: {{ person.Interests }}</p>
  `
})
export class PersonListingComponent {
    @Input() person: Person
}