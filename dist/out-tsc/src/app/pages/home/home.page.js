import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { StorageService } from 'src/app/services/storage.service';
import { ModalController, Platform, AlertController } from '@ionic/angular';
import { SignComponent } from 'src/app/components/modals/sign/sign.component';
import { LoginComponent } from 'src/app/components/modals/login/login.component';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
var HomePage = /** @class */ (function () {
    function HomePage(socketService, storageService, modalController, localNotifications, platform, alertCtlr) {
        var _this = this;
        this.socketService = socketService;
        this.storageService = storageService;
        this.modalController = modalController;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.alertCtlr = alertCtlr;
        this.title = 'Welcome';
        this.logo = '/assets/img/logo.png';
        this.platform.ready().then(function () {
            _this.localNotifications.on('trigger').subscribe(function (res) {
                _this.showAlert();
            });
            _this.localNotifications.on('click').subscribe(function (res) {
                _this.showAlert();
            });
        });
    }
    HomePage.prototype.showAlert = function () {
        this.alertCtlr.create({
            header: 'HOLA',
            message: 'HAS RECIBIDO?',
            buttons: ['Ok']
        }).then(function (alert) { return alert.present(); });
    };
    HomePage.prototype.ngOnInit = function () {
    };
    HomePage.prototype.openSignUpModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: SignComponent
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.openLogInModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: LoginComponent
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HomePage.prototype.clearStorage = function () {
        this.storageService.clear();
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: './home.page.html',
            styleUrls: ['./home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SocketService,
            StorageService,
            ModalController,
            LocalNotifications,
            Platform,
            AlertController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map