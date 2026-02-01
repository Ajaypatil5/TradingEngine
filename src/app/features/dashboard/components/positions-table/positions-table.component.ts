import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-positions-table',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="h-48 border-t border-grid-line bg-surface-dark flex flex-col w-full">
      <div class="flex items-center justify-between border-b border-grid-line px-2 bg-surface-dark">
        <div class="flex">
          <button class="px-4 py-2.5 text-xs font-medium text-primary border-b-2 border-primary relative">Positions (0)</button>
          <button class="px-4 py-2.5 text-xs font-medium text-text-secondary hover:text-white hover:bg-surface-lighter transition-colors">Pending Orders</button>
          <button class="px-4 py-2.5 text-xs font-medium text-text-secondary hover:text-white hover:bg-surface-lighter transition-colors">History</button>
        </div>
        <div class="flex gap-1 pr-2">
          <button class="p-1 hover:text-white text-text-secondary"><span class="material-symbols-outlined text-sm">filter_list</span></button>
          <button class="p-1 hover:text-white text-text-secondary"><span class="material-symbols-outlined text-sm">view_module</span></button>
          <button class="p-1 hover:text-white text-text-secondary"><span class="material-symbols-outlined text-sm">download</span></button>
        </div>
      </div>
      <div class="flex-1 flex flex-col items-center justify-center text-text-secondary gap-2 bg-surface-dark">
        <span class="material-symbols-outlined text-2xl opacity-50">receipt_long</span>
        <p class="text-xs">No open positions</p>
      </div>
    </div>
  `
})
export class PositionsTableComponent { }
