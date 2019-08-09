import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
var BubbleComponent = /** @class */ (function () {
    function BubbleComponent() {
    }
    BubbleComponent.prototype.ngOnInit = function () { };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BubbleComponent.prototype, "nickname", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BubbleComponent.prototype, "message", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], BubbleComponent.prototype, "background", void 0);
    BubbleComponent = tslib_1.__decorate([
        Component({
            selector: 'app-bubble',
            templateUrl: './bubble.component.html',
            styleUrls: ['./bubble.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BubbleComponent);
    return BubbleComponent;
}());
export { BubbleComponent };
//# sourceMappingURL=bubble.component.js.map