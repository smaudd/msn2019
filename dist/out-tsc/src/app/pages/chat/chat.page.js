import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SocketService } from '../../services/socket.service';
import { NavController } from '@ionic/angular';
import { StorageService } from 'src/app/services/storage.service';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
var ChatPage = /** @class */ (function () {
    function ChatPage(socketService, nav, fb, storageService) {
        this.socketService = socketService;
        this.nav = nav;
        this.fb = fb;
        this.storageService = storageService;
        this.nickname$ = this.storageService.nickname$;
    }
    ChatPage.prototype.ngOnInit = function () {
        this.form = this.fb.group({
            message: new FormControl('', [Validators.required])
        });
    };
    ChatPage.prototype.sendMessage = function (message) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var data;
            return tslib_1.__generator(this, function (_a) {
                data = {
                    msg: message,
                    nickname: this.nickname$.value
                };
                this.form.reset();
                this.socketService.emit('input', data);
                return [2 /*return*/];
            });
        });
    };
    ChatPage = tslib_1.__decorate([
        Component({
            selector: 'app-chat',
            templateUrl: './chat.page.html',
            styleUrls: ['./chat.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SocketService,
            NavController,
            FormBuilder,
            StorageService])
    ], ChatPage);
    return ChatPage;
}());
export { ChatPage };
//# sourceMappingURL=chat.page.js.map