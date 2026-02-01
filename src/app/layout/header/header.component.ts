import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [CommonModule],
    template: `
    <header class="h-12 flex items-center justify-between border-b border-grid-line px-4 bg-surface-dark flex-shrink-0 z-20 w-full">
      <div class="flex items-center gap-4">
        <div class="flex items-center gap-2 text-primary">
          <span class="material-symbols-outlined text-2xl" style="font-variation-settings: 'FILL' 1">candlestick_chart</span>
          <span class="font-bold tracking-tight text-lg">TradeHub Terminal</span>
        </div>
        <div class="h-6 w-px bg-grid-line mx-2"></div>
        <div class="flex items-center gap-2 px-3 py-1 rounded bg-surface-lighter border border-grid-line">
          <span class="material-symbols-outlined text-base text-text-secondary">person</span>
          <span class="text-xs font-mono text-text-secondary">Ajay</span>
        </div>
        <span class="text-xs font-bold text-yellow-500 bg-yellow-500/10 border border-yellow-500/20 px-2 py-0.5 rounded-sm">DEMO ACCOUNT</span>
      </div>
      <div class="flex items-center gap-4">
        <span class="text-xs text-text-secondary">Connected <span class="text-trade-green">12ms</span></span>
        <button class="text-text-secondary hover:text-white transition-colors"><span class="material-symbols-outlined text-xl">notifications</span></button>
        <div class="size-8 rounded-full bg-surface-lighter border border-grid-line flex items-center justify-center overflow-hidden">
            <div class="bg-center bg-no-repeat bg-cover size-full" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAdqmM3xZrC5UJTbMmxOGXQBT2ehmWW4JypcwIkKUAjH0MGIE4_fD_g0FMtGjF2rFaVcLQ66H8J0LJxR5E7KbHoCB4DzY6ejY3iXxfTk7SVKtHBN6oW2YmrIJeEy0uNtigcLhbBUbs7ROxeWf3OftX3FSQl9UTiEi766jQhqOlPByfpiqLojN_N2lpWkP6QwzGRNpLz6ciP_PpBlwRcGxsIRVehmMshMKLRBNZI7s0UczbwmTohU5SJLawR4D5uslmuQq0qSuCwrOmw");'></div>
        </div>
      </div>
    </header>
  `
})
export class HeaderComponent { }
