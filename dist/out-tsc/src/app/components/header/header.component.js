import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ContactSearchComponent } from '../modals/contact-search/contact-search.component';
import { NotificationsComponent } from '../modals/notifications/notifications.component';
var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(modalController) {
        this.modalController = modalController;
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openContactSearchModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ContactSearchComponent,
                            keyboardClose: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderComponent.prototype.openNotificationsModal = function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: NotificationsComponent,
                            keyboardClose: false,
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    HeaderComponent.prototype.dismiss = function () {
        this.modalController.dismiss({
            'dismissed': true
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], HeaderComponent.prototype, "title", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "isHome", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "addContact", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Boolean)
    ], HeaderComponent.prototype, "notifications", void 0);
    HeaderComponent = tslib_1.__decorate([
        Component({
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ModalController])
    ], HeaderComponent);
    return HeaderComponent;
}());
export { HeaderComponent };
//# sourceMappingURL=header.component.js.map