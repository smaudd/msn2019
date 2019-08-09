import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { AuthenticationService } from 'src/app/services/http/authentication.service';
import { StorageService } from 'src/app/services/storage.service';
import { Router } from '@angular/router';
import { ModalController, AlertController } from '@ionic/angular';
import { AlertService } from 'src/app/services/alert.service';
import { map } from 'rxjs/operators';
import { ContactsService } from 'src/app/services/http/contacts.service';
var LoginComponent = /** @class */ (function () {
    function LoginComponent(http, storageService, router, modalController, alertService, alertCtlr, contactsService) {
        var _this = this;
        this.http = http;
        this.storageService = storageService;
        this.router = router;
        this.modalController = modalController;
        this.alertService = alertService;
        this.alertCtlr = alertCtlr;
        this.contactsService = contactsService;
        this.loginForm = {
            fields: {
                email: {
                    type: 'email',
                    label: 'Email'
                },
                password: {
                    type: 'password',
                    label: 'Password'
                },
            },
            buttons: {
                login: {
                    label: 'Log In',
                    action: function (form) { return _this.doLogin(form); }
                }
            }
        };
        this.title = 'Log In';
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.doLogin = function (loginForm) {
        var _this = this;
        this.http.logIn(loginForm)
            .pipe(map(function (response) {
            _this.storageService.set('contacts', response.contacts);
            _this.storageService.set('token', response.token);
            // this.contactsService.setContacts(response.contacts)
            return response;
        })).subscribe(function (_) {
            _this.router.navigate(['/navigation']);
            _this.dismiss();
        }, function (error) {
            if (error.status === 422) {
                var alertInfo = {
                    header: 'Invalid Credentials',
                    subheader: 'Try Again',
                    message: 'The credentials that you provided are not correct',
                    buttons: ['OK']
                };
                _this.alertService.presentAlert(alertInfo);
            }
        });
    };
    LoginComponent.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    LoginComponent.prototype.showAlert = function (msg) {
        this.alertCtlr.create({
            header: 'HOLA',
            message: msg,
            buttons: ['Ok']
        }).then(function (alert) { return alert.present(); });
    };
    LoginComponent = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [AuthenticationService,
            StorageService,
            Router,
            ModalController,
            AlertService,
            AlertController,
            ContactsService])
    ], LoginComponent);
    return LoginComponent;
}());
export { LoginComponent };
//# sourceMappingURL=login.component.js.map