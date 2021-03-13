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
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatSelectModule} from '@angular/material/select';

import { ProfileComponent } from '../pages/profile/profile.component';
import { InvestComponent } from '../pages/invest/invest.component';
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { InvestsheetmenuComponent } from '../pages/invest/investsheetmenu/investsheetmenu.component';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogviewComponent } from '../pages/dialogview/dialogview.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';


@NgModule({
  declarations: [LayoutComponent, DashboardComponent, 
     ProfileComponent, InvestComponent,
     NotificationsComponent,  InvestsheetmenuComponent, DialogviewComponent],
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
    MatBottomSheetModule,
    MatDialogModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatCheckboxModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatSnackBarModule
  ],
  entryComponents: [DialogviewComponent]
})
export class LayoutModule { }
