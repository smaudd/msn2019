import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Platform, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
import config from '../config';
import { StorageService } from './services/storage.service';
var AppComponent = /** @class */ (function () {
    function AppComponent(platform, splashScreen, statusBar, backgroundMode, alertCtlr, storageService, oneSignal) {
        this.platform = platform;
        this.splashScreen = splashScreen;
        this.statusBar = statusBar;
        this.backgroundMode = backgroundMode;
        this.alertCtlr = alertCtlr;
        this.storageService = storageService;
        this.oneSignal = oneSignal;
        this.initializeApp();
    }
    AppComponent.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.backgroundMode.enable();
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            if (_this.platform.is('cordova')) {
                console.log('Im cordova');
                _this.setupPush();
            }
        });
    };
    AppComponent.prototype.setupPush = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            return tslib_1.__generator(this, function (_a) {
                this.oneSignal.startInit(config.oneSignalKey, config.oneSignalAppId);
                this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.None);
                this.oneSignal.getIds()
                    .then(function (userInfo) {
                    _this.showAlert(JSON.stringify(userInfo));
                    _this.storageService.set('player_id', userInfo.userId);
                })
                    .then(function (userInfo) {
                    _this.showAlert(JSON.stringify(userInfo));
                })
                    .catch(function (err) {
                    _this.showAlert(JSON.stringify(err));
                });
                this.oneSignal.handleNotificationOpened().subscribe(function (data) {
                });
                this.oneSignal.handleNotificationReceived().subscribe(function (data) {
                    _this.oneSignal.getIds().then(function (userInfo) {
                        _this.showAlert(JSON.stringify(userInfo));
                    });
                });
                this.oneSignal.endInit();
                return [2 /*return*/];
            });
        });
    };
    AppComponent.prototype.showAlert = function (msg) {
        this.alertCtlr.create({
            header: 'HOLA',
            message: msg,
            buttons: ['Ok']
        }).then(function (alert) { return alert.present(); });
    };
    AppComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            templateUrl: 'app.component.html'
        }),
        tslib_1.__metadata("design:paramtypes", [Platform,
            SplashScreen,
            StatusBar,
            BackgroundMode,
            AlertController,
            StorageService,
            OneSignal])
    ], AppComponent);
    return AppComponent;
}());
export { AppComponent };
//# sourceMappingURL=app.component.js.map