import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { IonicStorageModule } from '@ionic/storage';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { BackgroundMode } from '@ionic-native/background-mode/ngx';
import { OneSignal } from '@ionic-native/onesignal/ngx';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib_1.__decorate([
        NgModule({
            declarations: [AppComponent],
            imports: [
                BrowserModule,
                IonicModule.forRoot(),
                AppRoutingModule,
                IonicStorageModule.forRoot(),
                HttpClientModule
            ],
            providers: [
                StatusBar,
                SplashScreen,
                LocalNotifications,
                BackgroundMode,
                OneSignal,
                { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
                {
                    provide: HTTP_INTERCEPTORS,
                    useClass: TokenInterceptor,
                    multi: true
                }
            ],
            bootstrap: [AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
export { AppModule };
//# sourceMappingURL=app.module.js.map