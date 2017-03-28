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
var core_1 = require("@angular/core");
var app_service_1 = require("./app.service");
var AppComponent = (function () {
    function AppComponent(appService) {
        this.appService = appService;
        this.clicks = 0;
        this.colors = ['tomato', 'gold', 'palegreen', 'steelblue', 'purple', 'white'];
        this.coordinates = [35, 215];
        this.loaded = false;
        this.search = '';
        this.searchDelay = 0;
        //this will be false on initial page landing, but once a search is made, switches to true
        //so loading from then on will display the loading message and search splashes
        this.afterFirstLoad = false;
    }
    AppComponent.prototype.getPeople = function () {
        var _this = this;
        this.resetLoadingDiv();
        this.loaded = false;
        this.people = [];
        this.afterFirstLoad = true;
        //sanitize input a little bit
        if (this.searchDelay < 0) {
            this.searchDelay = 0;
        }
        // and my research tells me LINQ is pretty good about protecting from SQL injections,
        // so I guess this.search string doesn't need to be sanitized
        this.appService.getPeople(this.search, this.searchDelay).then(function (people) {
            _this.loaded = true;
            _this.people = people;
        });
    };
    AppComponent.prototype.onHover = function (person) {
        this.hoveredPerson = person;
    };
    AppComponent.prototype.onMouseLeave = function () {
        this.coordinates[0] = 35;
        this.coordinates[1] = 215;
    };
    AppComponent.prototype.onMouseMove = function (event) {
        this.coordinates[0] = event.clientX;
        this.coordinates[1] = event.clientY;
        // a bit hacky, but need to make sure the magnifying class doesn't accidentally cover the search bar
        if (event.clientY <= 200) {
            this.onMouseLeave();
        }
        // but if you thought THAT was hacky/dubious...
    };
    AppComponent.prototype.onClick = function (event) {
        if (this.afterFirstLoad) {
            this.clicks = (this.clicks + 1) % 6;
            var loadComponent = document.querySelector('.loading-component');
            var playground = document.querySelector('.playground');
            var svg = loadComponent.querySelector('svg');
            if (this.clicks === 0) {
                this.colors.forEach(function (color) {
                    // would you believe me if I told you IE10 doesn't support classList on svg elements?
                    // https://developer.mozilla.org/en-US/docs/Web/API/Element/classList#Browser_compatibility
                    if (svg.classList) {
                        svg.classList.remove(color);
                    }
                });
            }
            if (svg.classList) {
                svg.classList.add(this.colors[this.clicks]);
            }
            var newSvg = svg.cloneNode(true);
            playground.appendChild(newSvg);
        }
    };
    AppComponent.prototype.resetLoadingDiv = function () {
        var div = document.querySelector('.playground');
        div.innerHTML = "";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        providers: [app_service_1.AppService],
        selector: 'my-app',
        templateUrl: './tsScripts/app/app.component.html',
        styleUrls: ['./tsScripts/app/app.component.css']
    }),
    __metadata("design:paramtypes", [app_service_1.AppService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map