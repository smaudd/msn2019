import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';
var ToastService = /** @class */ (function () {
    function ToastService(toastController) {
        this.toastController = toastController;
        this.toast = null;
    }
    ToastService.prototype.present = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (this.toast) {
                            this.dismiss();
                        }
                        _a = this;
                        return [4 /*yield*/, this.toastController.create({
                                message: message,
                                showCloseButton: true,
                            })];
                    case 1:
                        _a.toast = _b.sent();
                        this.toast.present();
                        return [2 /*return*/];
                }
            });
        });
    };
    ToastService.prototype.dismiss = function () {
        this.toast.dismiss();
    };
    ToastService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ToastController])
    ], ToastService);
    return ToastService;
}());
export { ToastService };
//# sourceMappingURL=toast.service.js.map