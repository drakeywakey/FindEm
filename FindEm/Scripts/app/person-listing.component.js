"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var person_1 = require('./person');
var PersonListingComponent = (function () {
    function PersonListingComponent() {
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', person_1.Person)
    ], PersonListingComponent.prototype, "person", void 0);
    PersonListingComponent = __decorate([
        core_1.Component({
            selector: 'person-listing',
            template: "    \n    <img src=\"{{ person.ImagePath }}\" />\n    <h3>{{ person.FirstName + ' ' + person.LastName }}</h3>\n    <p>{{ person.Age }} years old</p>\n    <p>Address: {{ person.Address }}</p>\n    <p>Interests: {{ person.Interests }}</p>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], PersonListingComponent);
    return PersonListingComponent;
}());
exports.PersonListingComponent = PersonListingComponent;
//# sourceMappingURL=person-listing.component.js.map