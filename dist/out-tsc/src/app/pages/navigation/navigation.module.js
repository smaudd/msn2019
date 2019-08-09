import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { NavigationPage } from './navigation.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ChatsComponent } from './screens/chats/chats.component';
import { ContactsComponent } from './screens/contacts/contacts.component';
import { HomeComponent } from './screens/home/home.component';
var routes = [
    {
        path: '',
        component: NavigationPage,
        children: [
            {
                path: 'chats',
                component: ChatsComponent
            },
            {
                path: 'contacts',
                component: ContactsComponent
            },
            {
                path: 'home',
                component: HomeComponent
            }
        ]
    }
];
var NavigationPageModule = /** @class */ (function () {
    function NavigationPageModule() {
    }
    NavigationPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                ComponentsModule,
                RouterModule.forChild(routes)
            ],
            declarations: [
                NavigationPage,
                HomeComponent,
                ChatsComponent,
                ContactsComponent
            ]
        })
    ], NavigationPageModule);
    return NavigationPageModule;
}());
export { NavigationPageModule };
//# sourceMappingURL=navigation.module.js.map