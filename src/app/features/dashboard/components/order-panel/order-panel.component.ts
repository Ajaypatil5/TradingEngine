import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-order-panel',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="w-80 flex-shrink-0 flex flex-col border-l border-grid-line bg-surface-dark h-full">
      <div class="p-4 flex items-center justify-between">
        <h3 class="font-bold text-sm tracking-wide text-white">NEW ORDER</h3>
        <span class="text-[10px] text-text-secondary border border-grid-line px-1.5 py-0.5 rounded uppercase">Spot</span>
      </div>
      <div class="grid grid-cols-2 gap-px px-4 mb-6">
        <div class="bg-trade-red/10 border border-trade-red/20 rounded-l p-3 text-center cursor-pointer hover:bg-trade-red/20 transition-colors">
          <div class="text-[10px] text-trade-red font-bold uppercase mb-1">Bid (Sell)</div>
          <div class="text-xl font-mono font-bold text-trade-red">1688.53</div>
        </div>
        <div class="bg-trade-green/10 border border-trade-green/20 rounded-r p-3 text-center cursor-pointer hover:bg-trade-green/20 transition-colors">
          <div class="text-[10px] text-trade-green font-bold uppercase mb-1">Ask (Buy)</div>
          <div class="text-xl font-mono font-bold text-trade-green">1728.98</div>
        </div>
      </div>
      <div class="px-4 mb-6">
        <label class="text-[10px] font-bold text-text-secondary uppercase block mb-2">Volume (Lots)</label>
        <div class="flex items-center bg-background-dark rounded border border-grid-line focus-within:border-primary transition-colors overflow-hidden">
          <button class="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-lighter hover:text-white transition-colors border-r border-grid-line">
            <span class="material-symbols-outlined text-sm">remove</span>
          </button>
          <input class="bg-transparent border-none text-center w-full text-white focus:ring-0 font-mono font-bold text-base" step="0.01" type="number" value="1.00"/>
          <button class="w-10 h-10 flex items-center justify-center text-text-secondary hover:bg-surface-lighter hover:text-white transition-colors border-l border-grid-line">
            <span class="material-symbols-outlined text-sm">add</span>
          </button>
        </div>
        <div class="flex justify-between mt-1 px-1">
          <span class="text-[10px] text-text-secondary">Min: 0.01</span>
          <span class="text-[10px] text-text-secondary">Max: 100.0</span>
        </div>
      </div>
      <div class="px-4 mb-6 space-y-4">
        <button class="w-full bg-trade-red hover:bg-red-600 text-white py-4 rounded font-bold transition-colors flex flex-col items-center justify-center">
          <span class="text-sm">SELL @ MARKET</span>
        </button>
        <button class="w-full bg-trade-green hover:bg-green-600 text-white py-4 rounded font-bold transition-colors flex flex-col items-center justify-center">
          <span class="text-sm">BUY @ MARKET</span>
        </button>
      </div>
      <div class="px-4 mt-auto mb-6">
        <div class="flex justify-between items-center py-3 border-t border-grid-line">
          <span class="text-xs text-text-secondary">Margin Req:</span>
          <span class="text-xs font-mono font-bold text-white">844.25 USD</span>
        </div>
        <p class="text-[10px] text-text-secondary text-center mt-2 italic">Market execution. Slippage may apply.</p>
      </div>
    </div>
  `
})
export class OrderPanelComponent { }
