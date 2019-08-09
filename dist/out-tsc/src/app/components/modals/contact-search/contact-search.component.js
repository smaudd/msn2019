import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { ContactsService } from 'src/app/services/http/contacts.service';
import { of } from 'rxjs';
import { debounceTime, distinctUntilChanged, mergeMap } from 'rxjs/operators';
import { FormControl } from '@angular/forms';
import { PopoverController } from '@ionic/angular';
import { SendInvitationComponent } from '../../popovers/send-invitation/send-invitation.component';
var ContactSearchComponent = /** @class */ (function () {
    function ContactSearchComponent(contactService, popoverController) {
        this.contactService = contactService;
        this.popoverController = popoverController;
        this.title = 'Add Contacts';
        this.loaderLabel = 'Loading';
        this.search = new FormControl('');
        this.contacts$ = of(null);
    }
    ContactSearchComponent.prototype.ngOnInit = function () {
        this.findContacts();
    };
    ContactSearchComponent.prototype.findContacts = function () {
        var _this = this;
        this.contacts$ = this.search
            .valueChanges
            .pipe(debounceTime(500), distinctUntilChanged(), mergeMap(function (input) {
            if (input !== '') {
                return _this.contactService.find(input);
            }
            return of(null);
        }));
    };
    ContactSearchComponent.prototype.openPopover = function (data) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var popover;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.popoverController.create({
                            component: SendInvitationComponent,
                            componentProps: data,
                            keyboardClose: true,
                            cssClass: 'popover'
                        })];
                    case 1:
                        popover = _a.sent();
                        return [4 /*yield*/, popover.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ContactSearchComponent = tslib_1.__decorate([
        Component({
            selector: 'app-contact-search',
            templateUrl: './contact-search.component.html',
            styleUrls: ['./contact-search.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [ContactsService,
            PopoverController])
    ], ContactSearchComponent);
    return ContactSearchComponent;
}());
export { ContactSearchComponent };
//# sourceMappingURL=contact-search.component.js.map