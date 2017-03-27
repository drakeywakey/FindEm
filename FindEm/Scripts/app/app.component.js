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
        this.coordinates = [15, 170];
        this.loaded = false;
        this.search = '';
    }
    AppComponent.prototype.getPeople = function () {
        var _this = this;
        this.loaded = false;
        this.people = [];
        this.appService.getPeople(this.search).then(function (people) {
            _this.loaded = true;
            _this.people = people;
        });
    };
    AppComponent.prototype.onHover = function (person) {
        this.hoveredPerson = person;
    };
    AppComponent.prototype.onMouseLeave = function () {
        this.coordinates[0] = 15;
        this.coordinates[1] = 170;
    };
    AppComponent.prototype.onMouseMove = function (event) {
        this.coordinates[0] = event.clientX;
        this.coordinates[1] = event.clientY;
        // a bit hacky, but need to make sure the magnifying class doesn't accidentally cover the search bar
        if (event.clientY <= 160) {
            this.onMouseLeave();
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            providers: [app_service_1.AppService],
            selector: 'my-app',
            templateUrl: './tsScripts/app/app.component.html',
            styleUrls: ['./tsScripts/app/app.component.css']
        }), 
        __metadata('design:paramtypes', [app_service_1.AppService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map