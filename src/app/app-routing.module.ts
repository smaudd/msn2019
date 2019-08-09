import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LoginGuard } from './guards/login.guard';
import { HomeGuard } from './guards/home.guard';

const routes: Routes = [
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
  {
    path: 'chat',
    loadChildren: './pages/chat/chat.module#ChatPageModule',
    canActivate: [LoginGuard]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
