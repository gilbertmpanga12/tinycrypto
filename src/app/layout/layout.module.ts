import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import { LayoutComponent } from './layout/layout.component';
import {LayoutRoutingModule} from './layout-routing.module';

import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { UnionsComponent } from '../pages/unions/unions.component';
import { ProfileComponent } from '../pages/profile/profile.component';
import { InvestComponent } from '../pages/invest/invest.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { InvestsheetmenuComponent } from '../pages/invest/investsheetmenu/investsheetmenu.component';


@NgModule({
  declarations: [LayoutComponent, DashboardComponent, 
    UnionsComponent, ProfileComponent, InvestComponent, NotificationsComponent,  InvestsheetmenuComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    LayoutRoutingModule,
    MatButtonModule,
    MatListModule,
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatBottomSheetModule
  ]
})
export class LayoutModule { }
