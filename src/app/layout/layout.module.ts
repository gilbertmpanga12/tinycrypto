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
import { NotificationsComponent } from '../pages/notifications/notifications.component';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogviewComponent } from '../pages/dialogview/dialogview.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatTableModule} from '@angular/material/table';
import {MatSortModule} from '@angular/material/sort';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import { ChartsModule } from 'ng2-charts';
import { WarningModule } from '../shared/warning/warning.module';

@NgModule({
  declarations: [LayoutComponent, DashboardComponent, 
     ProfileComponent, 
     NotificationsComponent, DialogviewComponent],
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
    MatSnackBarModule,MatPaginatorModule,
    MatProgressSpinnerModule,
    MatTableModule,
    MatSortModule,
    MatSlideToggleModule,
    ChartsModule,
    WarningModule
    
  ],
  entryComponents: [DialogviewComponent]
})
export class LayoutModule { }
