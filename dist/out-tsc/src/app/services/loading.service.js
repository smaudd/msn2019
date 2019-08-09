import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';
var LoadingService = /** @class */ (function () {
    function LoadingService(loadingController) {
        this.loadingController = loadingController;
    }
    LoadingService.prototype.present = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _a;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingController.create({
                                message: message,
                            })];
                    case 1:
                        _a.loading = _b.sent();
                        this.isLoading = true;
                        return [4 /*yield*/, this.loading.present()];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoadingService.prototype.dismiss = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                this.loading.dismiss();
                return [2 /*return*/];
            });
        });
    };
    LoadingService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [LoadingController])
    ], LoadingService);
    return LoadingService;
}());
export { LoadingService };
//# sourceMappingURL=loading.service.js.map