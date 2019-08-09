import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { map } from 'rxjs/operators';
var LoginGuard = /** @class */ (function () {
    function LoginGuard(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    LoginGuard.prototype.canActivate = function () {
        var _this = this;
        return this.storageService.get('token')
            .pipe(map(function (token) {
            if (token === null) {
                _this.router.navigate(['/home']);
                return false;
            }
            return true;
        }));
    };
    LoginGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService,
            Router])
    ], LoginGuard);
    return LoginGuard;
}());
export { LoginGuard };
//# sourceMappingURL=login.guard.js.map