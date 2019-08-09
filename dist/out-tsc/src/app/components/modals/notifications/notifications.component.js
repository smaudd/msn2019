import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { SocketService } from 'src/app/services/socket.service';
import config from '../../../../config';
var NotificationsComponent = /** @class */ (function () {
    function NotificationsComponent(socketService) {
        this.socketService = socketService;
        this.title = "Notifications";
        this.notifications$ = this.socketService.notificationsStream$;
        this.href = config;
    }
    NotificationsComponent.prototype.ngOnInit = function () {
        this.socketService.notificationsStream$.subscribe(function (data) {
            console.log('component', data);
        });
    };
    NotificationsComponent = tslib_1.__decorate([
        Component({
            selector: 'app-notifications',
            templateUrl: './notifications.component.html',
            styleUrls: ['./notifications.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [SocketService])
    ], NotificationsComponent);
    return NotificationsComponent;
}());
export { NotificationsComponent };
//# sourceMappingURL=notifications.component.js.map