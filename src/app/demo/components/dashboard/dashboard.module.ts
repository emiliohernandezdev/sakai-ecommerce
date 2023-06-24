import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { ChartModule } from 'primeng/chart';
import { MenuModule } from 'primeng/menu';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DockModule } from 'primeng/dock';
import { DialogModule } from 'primeng/dialog';
import { GalleriaModule } from 'primeng/galleria';
import { StyleClassModule } from 'primeng/styleclass';
import { PanelMenuModule } from 'primeng/panelmenu';
import { MenubarModule } from 'primeng/menubar';
import { TerminalModule, TerminalService } from 'primeng/terminal';
import { TreeModule } from 'primeng/tree';
import { ToastModule } from 'primeng/toast';
import { DashboardsRoutingModule } from './dashboard-routing.module';
import { MessageService } from 'primeng/api';

@NgModule({
    imports: [
        CommonModule,
        MenubarModule,
        TerminalModule,
        FormsModule,
        ChartModule,
        ToastModule,
        MenuModule,
        TreeModule,
        TableModule,
        StyleClassModule,
        DialogModule,
        GalleriaModule,
        PanelMenuModule,
        ButtonModule,
        DockModule,
        DashboardsRoutingModule
    ],
    providers: [MessageService, TerminalService],
    declarations: [DashboardComponent]
})
export class DashboardModule { }
