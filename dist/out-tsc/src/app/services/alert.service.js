import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
var AlertService = /** @class */ (function () {
    function AlertService(alertController) {
        this.alertController = alertController;
    }
    AlertService.prototype.presentAlert = function (alertInfo) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var header, subHeader, message, buttons, alert;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        header = alertInfo.header, subHeader = alertInfo.subHeader, message = alertInfo.message, buttons = alertInfo.buttons;
                        return [4 /*yield*/, this.alertController.create({
                                header: header,
                                subHeader: subHeader,
                                message: message,
                                buttons: buttons,
                                cssClass: 'alert'
                            })];
                    case 1:
                        alert = _a.sent();
                        return [4 /*yield*/, alert.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AlertService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AlertController])
    ], AlertService);
    return AlertService;
}());
export { AlertService };
//# sourceMappingURL=alert.service.js.map