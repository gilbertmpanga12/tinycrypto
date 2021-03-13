import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainGuard } from './services/main.guard';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./layout/layout.module').then((m) => m.LayoutModule),
    canActivateChild: [MainGuard]
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
