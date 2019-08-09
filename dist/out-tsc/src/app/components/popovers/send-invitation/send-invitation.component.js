import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { ContactsService } from 'src/app/services/http/contacts.service';
import { PopoverController, ModalController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
var SendInvitationComponent = /** @class */ (function () {
    function SendInvitationComponent(contactService, modalController, popoverController, storageService) {
        this.contactService = contactService;
        this.modalController = modalController;
        this.popoverController = popoverController;
        this.storageService = storageService;
    }
    SendInvitationComponent.prototype.ngOnInit = function () {
        console.log(this.nickname, this._id);
    };
    SendInvitationComponent.prototype.add = function () {
        var _this = this;
        this.sub = this.contactService.add(this.nickname)
            .subscribe(function (_) {
            _this.popoverController.dismiss();
            _this.modalController.dismiss();
        });
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SendInvitationComponent.prototype, "nickname", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SendInvitationComponent.prototype, "_id", void 0);
    SendInvitationComponent = tslib_1.__decorate([
        Component({
            selector: 'app-send-invitation',
            templateUrl: './send-invitation.component.html',
            styleUrls: ['./send-invitation.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ContactsService,
            ModalController,
            PopoverController,
            StorageService])
    ], SendInvitationComponent);
    return SendInvitationComponent;
}());
export { SendInvitationComponent };
//# sourceMappingURL=send-invitation.component.js.map