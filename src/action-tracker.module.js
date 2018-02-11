"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var core_1 = require("@angular/core");
var action_tracker_service_1 = require("./action-tracker.service");
var WbActionTrackerModule = /** @class */ (function () {
    function WbActionTrackerModule() {
    }
    WbActionTrackerModule_1 = WbActionTrackerModule;
    WbActionTrackerModule.forRoot = function () {
        return {
            ngModule: WbActionTrackerModule_1,
            providers: [
                action_tracker_service_1.WbActionTrackerService,
            ]
        };
    };
    WbActionTrackerModule = WbActionTrackerModule_1 = __decorate([
        core_1.NgModule({})
    ], WbActionTrackerModule);
    return WbActionTrackerModule;
    var WbActionTrackerModule_1;
}());
exports.WbActionTrackerModule = WbActionTrackerModule;
