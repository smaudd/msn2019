import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
import { StorageService } from '../services/storage.service';
import { mergeMap } from 'rxjs/operators';
var TokenInterceptor = /** @class */ (function () {
    function TokenInterceptor(storageService) {
        this.storageService = storageService;
    }
    TokenInterceptor.prototype.intercept = function (request, next) {
        var headers = request.headers || new HttpHeaders();
        return this.storageService.get('token')
            .pipe(mergeMap(function (token) {
            if (token) {
                headers = headers.append('Authorization', token);
                return next.handle(request.clone({ headers: headers }));
            }
            return next.handle(request);
        }));
    };
    TokenInterceptor = tslib_1.__decorate([
        Injectable(),
        tslib_1.__metadata("design:paramtypes", [StorageService])
    ], TokenInterceptor);
    return TokenInterceptor;
}());
export { TokenInterceptor };
//# sourceMappingURL=token.interceptor.js.map