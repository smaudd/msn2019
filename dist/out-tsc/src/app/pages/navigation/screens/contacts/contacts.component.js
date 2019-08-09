import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { ContactsService } from 'src/app/services/http/contacts.service';
import config from '../../../../../config';
import { AlertController } from '@ionic/angular';
var ContactsComponent = /** @class */ (function () {
    function ContactsComponent(storageService, router, contactsService, alertCtlr) {
        this.storageService = storageService;
        this.router = router;
        this.contactsService = contactsService;
        this.alertCtlr = alertCtlr;
        this.title = 'Contacts';
        this.contacts$ = this.contactsService.contacts$;
        this.href = config;
    }
    ContactsComponent.prototype.ngOnInit = function () {
    };
    ContactsComponent.prototype.openChat = function () {
    };
    ContactsComponent.prototype.clear = function () {
        var _this = this;
        this.storageService.clear();
        this.storageService.get('contacts')
            .subscribe(function (res) {
            _this.showAlert(res);
        });
        this.router.navigate(['/home']);
    };
    ContactsComponent.prototype.showAlert = function (msg) {
        this.alertCtlr.create({
            header: 'HOLA',
            message: msg,
            buttons: ['Ok']
        }).then(function (alert) { return alert.present(); });
    };
    ContactsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contacts',
            templateUrl: './contacts.component.html',
            styleUrls: ['./contacts.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService,
            Router,
            ContactsService,
            AlertController])
    ], ContactsComponent);
    return ContactsComponent;
}());
export { ContactsComponent };
//# sourceMappingURL=contacts.component.js.map