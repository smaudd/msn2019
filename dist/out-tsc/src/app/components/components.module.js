import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { BubbleComponent } from './bubble/bubble.component';
import { HeaderComponent } from './header/header.component';
import { SignComponent } from './modals/sign/sign.component';
import { LoginComponent } from './modals/login/login.component';
import { ContactSearchComponent } from './modals/contact-search/contact-search.component';
import { FormComponent } from './form/form.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { SendInvitationComponent } from './popovers/send-invitation/send-invitation.component';
import { NotificationsComponent } from './modals/notifications/notifications.component';
var ComponentsModule = /** @class */ (function () {
    function ComponentsModule() {
    }
    ComponentsModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
            ],
            declarations: [
                BubbleComponent,
                HeaderComponent,
                SignComponent,
                LoginComponent,
                ContactSearchComponent,
                FormComponent,
                SpinnerComponent,
                SendInvitationComponent,
                NotificationsComponent
            ],
            exports: [
                BubbleComponent,
                HeaderComponent,
                SignComponent,
                LoginComponent,
                ContactSearchComponent,
                FormComponent,
                SpinnerComponent,
                SendInvitationComponent,
                NotificationsComponent
            ],
            entryComponents: [
                SignComponent,
                LoginComponent,
                ContactSearchComponent,
                SendInvitationComponent,
                NotificationsComponent
            ]
        })
    ], ComponentsModule);
    return ComponentsModule;
}());
export { ComponentsModule };
//# sourceMappingURL=components.module.js.map