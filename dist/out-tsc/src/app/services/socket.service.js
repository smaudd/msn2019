import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import config from '../../config/index';
import { of } from 'rxjs';
import { StorageService } from './storage.service';
var SocketService = /** @class */ (function () {
    function SocketService(storageService) {
        this.storageService = storageService;
        this.socket = null;
        this.chatsStream$ = of([]);
        this.chatsStreamCache = [];
        this.notificationsStream$ = of([]);
        this.notificationsStreamCache = [];
        this.notificationsStream$ = of([]);
    }
    SocketService.prototype.connect = function (namespace, token) {
        var _this = this;
        this.socket = io(config.baseUrl + "/" + namespace, {
            query: {
                token: token
            }
        });
        this.socket.on('connect', function (_) {
            if (namespace === 'notifications') {
                _this.listen('pushNotification');
                _this.listen('channelInfo');
            }
            if (namespace === 'chats') {
                _this.listen('message');
            }
        });
    };
    SocketService.prototype.isConnected = function () {
        return this.socket !== null ? true : false;
    };
    SocketService.prototype.disconnect = function () {
        this.socket.disconnect();
    };
    SocketService.prototype.emit = function (event, data) {
        console.log(this.socket);
        this.socket.emit(event, data);
    };
    SocketService.prototype.listen = function (event) {
        var _this = this;
        this.socket.on(event, function (data) {
            if (event === 'message') {
                _this.chatsStreamCache.push(data);
                _this.chatsStream$ = of(_this.chatsStreamCache);
            }
            if (event === 'pushNotification') {
                console.log('oh yes');
                _this.notificationsStreamCache.push(data);
                _this.storageService.set('notification', 'HOLA');
                _this.notificationsStream$ = of(_this.notificationsStreamCache);
            }
            if (event === 'channelInfo') {
                console.log('channel', data);
            }
        });
    };
    SocketService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [StorageService])
    ], SocketService);
    return SocketService;
}());
export { SocketService };
//# sourceMappingURL=socket.service.js.map