import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { StorageService } from '../services/storage.service';
import { map } from 'rxjs/operators';
var HomeGuard = /** @class */ (function () {
    function HomeGuard(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    HomeGuard.prototype.canActivate = function () {
        var _this = this;
        return this.storageService.get('token')
            .pipe(map(function (token) {
            if (token !== null) {
                _this.router.navigate(['/navigation']);
                return false;
            }
            return true;
        }));
    };
    HomeGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService,
            Router])
    ], HomeGuard);
    return HomeGuard;
}());
export { HomeGuard };
//# sourceMappingURL=home.guard.js.map