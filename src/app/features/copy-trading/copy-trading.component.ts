import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-copy-trading',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="p-6 h-full overflow-y-auto bg-background-dark text-white">
      <div class="flex items-center justify-between mb-8">
          <h1 class="text-2xl font-bold">Copy Trading</h1>
          <button class="px-4 py-2 bg-primary text-white rounded font-bold hover:bg-blue-600 transition-colors">Become a Strategy Provider</button>
      </div>
      
      <div class="mb-8">
        <h2 class="text-lg font-bold mb-4 text-text-secondary uppercase text-xs tracking-wider">Top Performers (Last 30 Days)</h2>
        <div class="bg-surface-dark border border-grid-line rounded-lg overflow-hidden">
            <table class="w-full text-left text-sm">
                <thead class="bg-surface-lighter text-text-secondary font-medium">
                    <tr>
                        <th class="p-4">Trader</th>
                        <th class="p-4">Return</th>
                        <th class="p-4">Risk Score</th>
                        <th class="p-4">Copiers</th>
                        <th class="p-4">AUM</th>
                        <th class="p-4"></th>
                    </tr>
                </thead>
                <tbody class="divide-y divide-grid-line">
                    <tr *ngFor="let trader of [1,2,3,4,5]" class="hover:bg-surface-lighter/50 transition-colors">
                        <td class="p-4 flex items-center gap-3">
                            <div class="size-8 rounded-full bg-surface-lighter flex items-center justify-center font-bold">T{{trader}}</div>
                            <span class="font-bold">AlphaTrader{{trader}}</span>
                        </td>
                        <td class="p-4 font-mono font-bold text-trade-green">+{{trader * 12.5}}%</td>
                        <td class="p-4"><span class="px-2 py-0.5 rounded bg-yellow-500/20 text-yellow-500 font-bold text-xs">MEDIUM</span></td>
                        <td class="p-4 font-mono">1,2{{trader}}4</td>
                        <td class="p-4 font-mono">$45{{trader}},000</td>
                        <td class="p-4 text-right">
                            <button class="px-3 py-1.5 border border-primary text-primary hover:bg-primary hover:text-white rounded transition-colors text-xs font-bold">COPY</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
      </div>
    </div>
  `
})
export class CopyTradingComponent { }
