import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SocketService } from 'src/app/services/socket.service';
import { StorageService } from 'src/app/services/storage.service';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { Platform, AlertController } from '@ionic/angular';
var NavigationPage = /** @class */ (function () {
    function NavigationPage(router, socketService, storageService, localNotifications, platform, alertCtlr) {
        var _this = this;
        this.router = router;
        this.socketService = socketService;
        this.storageService = storageService;
        this.localNotifications = localNotifications;
        this.platform = platform;
        this.alertCtlr = alertCtlr;
        this.title = 'MSN 2019';
        this.platform.ready().then(function () {
            _this.localNotifications.on('trigger').subscribe(function (res) {
                _this.showAlert();
            });
            _this.localNotifications.on('click').subscribe(function (res) {
                _this.showAlert();
            });
        });
    }
    NavigationPage.prototype.showAlert = function () {
        this.alertCtlr.create({
            header: 'HOLA',
            message: 'HAS RECIBIDO?',
            buttons: ['Ok']
        }).then(function (alert) { return alert.present(); });
    };
    NavigationPage.prototype.ngOnInit = function () {
        this.router.navigate(['/navigation/contacts']);
    };
    NavigationPage.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
    };
    NavigationPage = tslib_1.__decorate([
        Component({
            selector: 'app-navigation',
            templateUrl: './navigation.page.html',
            styleUrls: ['./navigation.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [Router,
            SocketService,
            StorageService,
            LocalNotifications,
            Platform,
            AlertController])
    ], NavigationPage);
    return NavigationPage;
}());
export { NavigationPage };
//# sourceMappingURL=navigation.page.js.map