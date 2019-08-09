import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../../config';
import { StorageService } from '../storage.service';
import { mergeMap } from 'rxjs/operators';
var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    AuthenticationService.prototype.signUp = function (signupForm) {
        var _this = this;
        console.log(signupForm);
        return this.storageService.get('player_id')
            .pipe(mergeMap(function (player_id) {
            signupForm.player_id = player_id;
            return _this.http.post(config.baseUrl + '/signUp', signupForm);
        }));
    };
    AuthenticationService.prototype.logIn = function (loginForm) {
        var _this = this;
        return this.storageService.get('player_id')
            .pipe(mergeMap(function (player_id) {
            loginForm.player_id = player_id;
            return _this.http.post(config.baseUrl + '/login', loginForm);
        }));
    };
    AuthenticationService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            StorageService])
    ], AuthenticationService);
    return AuthenticationService;
}());
export { AuthenticationService };
//# sourceMappingURL=authentication.service.js.map