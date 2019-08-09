import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { BehaviorSubject, from } from 'rxjs';
var StorageService = /** @class */ (function () {
    function StorageService(storage) {
        this.storage = storage;
        this.nickname$ = new BehaviorSubject(null);
        this.token$ = new BehaviorSubject(null);
        this.notifier$ = new BehaviorSubject({ updatedOn: null, value: null });
    }
    StorageService.prototype.set = function (key, value) {
        this.notifier$.next({
            updatedOn: key,
            value: value
        });
        this.storage.set(key, value);
    };
    StorageService.prototype.get = function (key) {
        return from(this.storage.get(key));
    };
    StorageService.prototype.pushContact = function (value) {
        var _this = this;
        this.get('contacts')
            .subscribe(function (contacts) {
            contacts.push(value);
            _this.set('contacts', contacts);
        });
    };
    StorageService.prototype.pullContact = function (value) {
        var _this = this;
        this.get('contacts')
            .subscribe(function (contacts) {
            var pulled = contacts.filter(function (contact) { return contact._id !== value._id; });
            _this.set('contacts', pulled);
        });
    };
    StorageService.prototype.clear = function () {
        this.storage.clear();
    };
    StorageService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Storage])
    ], StorageService);
    return StorageService;
}());
export { StorageService };
//# sourceMappingURL=storage.service.js.map