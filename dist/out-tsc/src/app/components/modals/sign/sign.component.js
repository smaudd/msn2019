import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { StorageService } from '../../../services/storage.service';
import { AuthenticationService } from 'src/app/services/http/authentication.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { map } from 'rxjs/operators';
import { ContactsService } from 'src/app/services/http/contacts.service';
var SignComponent = /** @class */ (function () {
    function SignComponent(http, storageService, router, modalController, alertService, contactsService) {
        var _this = this;
        this.http = http;
        this.storageService = storageService;
        this.router = router;
        this.modalController = modalController;
        this.alertService = alertService;
        this.contactsService = contactsService;
        this.title = 'Sign Up';
        this.signUpForm = {
            fields: {
                nickname: { type: 'text', label: 'Nickname' },
                email: { type: 'email', label: 'Email' },
                password: { type: 'password', label: 'Password' },
                rpassword: { type: 'password', label: 'Repeat Password' }
            },
            buttons: {
                signup: {
                    label: 'Sign Up',
                    action: function (form) { return _this.doSignUp(form); }
                }
            }
        };
    }
    SignComponent.prototype.ngOnInit = function () {
    };
    SignComponent.prototype.doSignUp = function (signUpForm) {
        var _this = this;
        this.http.signUp(signUpForm)
            .pipe(map(function (response) {
            _this.storageService.set('contacts', response.contacts);
            _this.storageService.set('token', response.token);
            // this.contactsService.setContacts(response.contacts)
            return response;
        })).subscribe(function (_) {
            _this.router.navigate(['/navigation']);
            _this.dismiss();
        }, function (error) {
            if (error.status === 409) {
                var alertInfo = {
                    header: 'Try Again',
                    subheader: 'Credentials already in use',
                    message: error.error.msg,
                    buttons: ['OK']
                };
                _this.alertService.presentAlert(alertInfo);
            }
        });
    };
    SignComponent.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    SignComponent = tslib_1.__decorate([
        Component({
            selector: 'app-sign',
            templateUrl: './sign.component.html',
            styleUrls: ['./sign.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService,
            StorageService,
            Router,
            ModalController,
            AlertService,
            ContactsService])
    ], SignComponent);
    return SignComponent;
}());
export { SignComponent };
//# sourceMappingURL=sign.component.js.map