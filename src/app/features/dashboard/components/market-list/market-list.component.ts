import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-market-list',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="w-72 flex-shrink-0 flex flex-col border-r border-grid-line bg-surface-dark h-full">
      <div class="p-3 border-b border-grid-line">
        <div class="flex items-center bg-background-dark rounded border border-grid-line px-2 h-9 focus-within:border-primary transition-colors">
          <span class="material-symbols-outlined text-text-secondary text-lg">search</span>
          <input class="bg-transparent border-none outline-none text-xs w-full text-white placeholder-text-secondary focus:ring-0 ml-1" placeholder="Search markets..." type="text"/>
        </div>
      </div>
      <div class="flex text-xs border-b border-grid-line">
        <button class="flex-1 py-2 text-primary border-b-2 border-primary font-medium">Favorites</button>
        <button class="flex-1 py-2 text-text-secondary hover:text-white transition-colors">Forex</button>
        <button class="flex-1 py-2 text-text-secondary hover:text-white transition-colors">Crypto</button>
        <button class="flex-1 py-2 text-text-secondary hover:text-white transition-colors">Stocks</button>
      </div>
      <div class="grid grid-cols-4 px-3 py-2 text-[10px] text-text-secondary font-medium border-b border-grid-line">
        <div class="col-span-2">SYMBOL</div>
        <div class="text-right">BID</div>
        <div class="text-right">CHG%</div>
      </div>
      <div class="flex-1 overflow-y-auto">
        <div *ngFor="let m of markets" 
             class="grid grid-cols-4 px-3 py-3 border-b border-grid-line/50 cursor-pointer group transition-colors"
             [class.bg-surface-lighter]="m.active"
             [class.border-l-2]="m.active"
             [class.border-l-primary]="m.active"
             [class.hover:bg-surface-lighter]="!m.active">
          <div class="col-span-2 flex flex-col justify-center">
            <span class="text-xs font-bold text-white group-hover:text-primary">{{ m.symbol }}</span>
            <span class="text-[10px] text-text-secondary">{{ m.desc }}</span>
          </div>
          <div class="flex items-center justify-end text-xs font-mono" [ngClass]="m.up ? 'text-trade-green' : 'text-trade-red'">{{ m.bid }}</div>
          <div class="flex items-center justify-end text-xs font-mono" [ngClass]="m.up ? 'text-trade-green' : 'text-trade-red'">{{ m.chg }}</div>
        </div>
      </div>
    </div>
  `
})
export class MarketListComponent {
    markets = [
        { symbol: 'EURUSD', desc: 'Euro vs US Dollar', bid: '1.0845', chg: '-0.12%', up: false, active: false },
        { symbol: 'GBPUSD', desc: 'Great Britain Pound', bid: '1.2688', chg: '+0.05%', up: true, active: false },
        { symbol: 'XPDUSD', desc: 'Palladium Spot', bid: '1688.5', chg: '+1.24%', up: true, active: true },
        { symbol: 'BTCUSD', desc: 'Bitcoin', bid: '42,560', chg: '+2.45%', up: true, active: false },
        { symbol: 'XAUUSD', desc: 'Gold Spot', bid: '2032.1', chg: '+0.42%', up: true, active: false },
        { symbol: 'USDJPY', desc: 'US Dollar vs Yen', bid: '148.20', chg: '-0.30%', up: false, active: false },
    ];
}
