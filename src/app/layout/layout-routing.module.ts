import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { InvestComponent } from '../pages/invest/invest.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { UnionsComponent } from '../pages/unions/unions.component';
import {LayoutComponent} from './layout/layout.component';

const routes: Routes = [{
    path: '',
    component: LayoutComponent,
    children: [{
      path: '',
      component: DashboardComponent
    },
    {
      path: 'profile',
      component: ProfileComponent
    },
    {
      path: 'invest',
      component: InvestComponent
    },
    {
      path: 'unions',
      component: UnionsComponent
    },
    {
      path: 'notifications',
      component: NotificationsComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }