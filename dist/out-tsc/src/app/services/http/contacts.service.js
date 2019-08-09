import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import config from '../../../config';
import { of, BehaviorSubject } from 'rxjs';
import { StorageService } from '../storage.service';
import { mergeMap, tap } from 'rxjs/operators';
var ContactsService = /** @class */ (function () {
    function ContactsService(http, storageService) {
        var _this = this;
        this.http = http;
        this.storageService = storageService;
        this.contacts$ = new BehaviorSubject([]);
        this.storageService.notifier$
            .pipe(mergeMap(function (notification) {
            if (notification.updatedOn === 'contacts') {
                _this.setContacts(notification.value);
                return of(null);
            }
            return _this.storageService.get('contacts');
        }))
            .subscribe(function (contacts) {
            if (contacts) {
                _this.setContacts(contacts);
            }
        });
    }
    ContactsService.prototype.setContacts = function (value) {
        this.contacts$.next(value);
    };
    ContactsService.prototype.find = function (nickname) {
        return this.http.get(config.baseUrl + "/contacts/find?nickname=" + nickname);
    };
    ContactsService.prototype.add = function (nickname) {
        var _this = this;
        return this.http.post(config.baseUrl + "/contacts/add", { nickname: nickname })
            .pipe(tap(function (response) {
            _this.storageService.pushContact(response.contact);
        }));
    };
    ContactsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient,
            StorageService])
    ], ContactsService);
    return ContactsService;
}());
export { ContactsService };
//# sourceMappingURL=contacts.service.js.map