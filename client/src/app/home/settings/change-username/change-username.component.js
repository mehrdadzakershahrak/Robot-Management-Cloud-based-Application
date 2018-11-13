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
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var index_1 = require("../../../_services/index");
var router_1 = require("@angular/router");
var ChangeUsernameComponent = /** @class */ (function () {
    function ChangeUsernameComponent(userService, alertService, router) {
        this.userService = userService;
        this.alertService = alertService;
        this.router = router;
        this.loading = false;
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.model = this.currentUser;
    }
    ChangeUsernameComponent.prototype.changeUsername = function () {
        var _this = this;
        this.loading = true;
        this.userService.update(this.model)
            .subscribe(function (data) {
            _this.alertService.success('Username change successful.', true);
            localStorage.setItem('currentUser', JSON.stringify(_this.model));
            _this.router.navigate(['/settings']);
        }, function (error) {
            _this.alertService.error(error);
            _this.loading = false;
        });
    };
    ChangeUsernameComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            templateUrl: 'change-username.component.html',
        }),
        __metadata("design:paramtypes", [index_1.UserService, index_1.AlertService, router_1.Router])
    ], ChangeUsernameComponent);
    return ChangeUsernameComponent;
}());
exports.ChangeUsernameComponent = ChangeUsernameComponent;
//# sourceMappingURL=change-username.component.js.map