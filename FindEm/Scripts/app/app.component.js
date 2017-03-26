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
var app_service_1 = require('./app.service');
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.search = '';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getPeople();
    };
    AppComponent.prototype.getPeople = function () {
        var _this = this;
        this.appService.getPeople(this.search).then(function (people) { return _this.people = people; });
        console.log(this.people);
    };
    AppComponent = __decorate([
        core_1.Component({
            providers: [app_service_1.AppService],
            selector: 'my-app',
            template: "    \n    <input type=\"text\" [(ngModel)]=\"search\" />\n    <button (click)=\"getPeople()\">Click me!</button>\n    <ul>\n      <li *ngFor=\"let person of people\">\n        <img src=\"{{ person.ImagePath }}\" />\n        <p>{{ person.FirstName }}</p>\n      </li>\n    </ul>\n  "
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map