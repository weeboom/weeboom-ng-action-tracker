"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
exports.createActionSequence = function (name, steps) { return ({
    id: null,
    name: name,
    steps: steps.reduce(function (acum, _a) {
        var name = _a.name, index = _a.index;
        acum[name] = {
            id: null,
            index: index
        };
        return acum;
    }, {})
}); };
var WbActionTrackerService = /** @class */ (function () {
    function WbActionTrackerService() {
    }
    WbActionTrackerService.prototype.startTracking = function (scenario, resolver) {
        this.currentScenario = scenario;
        this.resovler = resolver;
    };
    WbActionTrackerService.prototype.stopTracking = function () {
        this.currentAction = null;
        this.currentScenario = null;
        this.resovler = null;
        this.expectedAction = null;
    };
    WbActionTrackerService.prototype.expect = function (action) {
        this.expectedAction = action;
    };
    WbActionTrackerService.prototype.dispatch = function (action) {
        this.currentAction = action;
    };
    WbActionTrackerService.prototype.resolve = function () {
        this.resovler();
    };
    WbActionTrackerService = __decorate([
        core_1.Injectable()
    ], WbActionTrackerService);
    return WbActionTrackerService;
}());
exports.WbActionTrackerService = WbActionTrackerService;
