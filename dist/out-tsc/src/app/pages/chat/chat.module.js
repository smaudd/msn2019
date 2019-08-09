import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ChatPage } from './chat.page';
import { ComponentsModule } from 'src/app/components/components.module';
var routes = [
    {
        path: '',
        component: ChatPage
    }
];
var ChatPageModule = /** @class */ (function () {
    function ChatPageModule() {
    }
    ChatPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                ReactiveFormsModule,
                IonicModule,
                ComponentsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ChatPage]
        })
    ], ChatPageModule);
    return ChatPageModule;
}());
export { ChatPageModule };
//# sourceMappingURL=chat.module.js.map