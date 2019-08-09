import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { HomeGuard } from './guards/home.guard';
var routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {
        path: 'home',
        loadChildren: './pages/home/home.module#HomePageModule',
        canActivate: [HomeGuard]
    },
    {
        path: 'navigation',
        loadChildren: './pages/navigation/navigation.module#NavigationPageModule',
        canActivate: [LoginGuard]
    },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib_1.__decorate([
        NgModule({
            imports: [
                RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
            ],
            exports: [RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map