import { Injectable } from '@angular/core';
import { Person } from './person';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class AppService {
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(private http: Http) { }

    getPeople(search: string): Promise<Person[]> {
        return this.http.post('/Person/Search', JSON.stringify({ searchString: search }), { headers: this.headers })
            .toPromise()
            .then(response => response.json() as Person[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error);
        return Promise.reject(error.message || error);
    }
}