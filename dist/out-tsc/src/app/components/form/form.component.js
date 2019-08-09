import * as tslib_1 from "tslib";
import { Component, Input } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
var FormComponent = /** @class */ (function () {
    function FormComponent(fb) {
        this.fb = fb;
    }
    FormComponent.prototype.ngOnInit = function () {
        var _this = this;
        var formControls = {};
        Object.keys(this.builder.fields).forEach(function (field) {
            switch (_this.builder.fields[field].type) {
                case 'text':
                    formControls[field] = new FormControl('', [Validators.required]);
                    break;
                case 'password':
                    formControls[field] = new FormControl('', [Validators.required]);
                    break;
                case 'email':
                    formControls[field] = new FormControl('', [Validators.required, Validators.email]);
            }
        });
        if (this.builder.fields.rpassword) {
            this.form = this.fb.group(formControls, { validator: this.pwdMatch });
        }
        else {
            this.form = this.fb.group(formControls);
        }
    };
    FormComponent.prototype.pwdMatch = function (frm) {
        return frm.get('password').value !== frm.get('rpassword').value ? { mismatch: true } : null;
    };
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", Object)
    ], FormComponent.prototype, "builder", void 0);
    FormComponent = tslib_1.__decorate([
        Component({
            selector: 'app-form',
            templateUrl: './form.component.html',
            styleUrls: ['./form.component.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder])
    ], FormComponent);
    return FormComponent;
}());
export { FormComponent };
//# sourceMappingURL=form.component.js.map