import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';

import { NotificationsComponent } from '../pages/notifications/notifications.component';
import { ProfileComponent } from '../pages/profile/profile.component';
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