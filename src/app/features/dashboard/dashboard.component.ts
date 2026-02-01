import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketListComponent } from './components/market-list/market-list.component';
import { ChartAreaComponent } from './components/chart-area/chart-area.component';
import { OrderPanelComponent } from './components/order-panel/order-panel.component';
import { PositionsTableComponent } from './components/positions-table/positions-table.component';

@Component({
    selector: 'app-dashboard',
    standalone: true,
    imports: [
        CommonModule,
        MarketListComponent,
        ChartAreaComponent,
        OrderPanelComponent,
        PositionsTableComponent
    ],
    template: `
    <div class="flex h-full w-full">
      
      <!-- Market List (Sidebar Left) -->
      <app-market-list />

      <!-- Center Content -->
      <div class="flex-1 flex flex-col min-w-0 bg-background-dark">
        <!-- Chart Area -->
        <app-chart-area class="flex-1" />
        
        <!-- Positions Table -->
        <app-positions-table />
      </div>

      <!-- Order Panel (Sidebar Right) -->
      <app-order-panel />
    </div>
  `
})
export class DashboardComponent { }
