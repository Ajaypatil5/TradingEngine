import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-wallet',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="p-6 h-full overflow-y-auto bg-background-dark text-white">
      <h1 class="text-2xl font-bold mb-6">Wallet & History</h1>
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <div class="bg-gradient-to-br from-surface-dark to-surface-lighter border border-grid-line rounded-xl p-6 relative overflow-hidden">
            <div class="absolute top-0 right-0 p-4 opacity-10"><span class="material-symbols-outlined text-6xl">account_balance_wallet</span></div>
             <p class="text-text-secondary text-sm mb-1">Total Balance</p>
             <h2 class="text-3xl font-mono font-bold mb-4">$99,949.19</h2>
             <div class="flex gap-2">
                <button class="flex-1 py-2 bg-trade-green hover:bg-green-600 text-white rounded font-bold transition-colors">Deposit</button>
                <button class="flex-1 py-2 bg-surface-lighter hover:bg-gray-700 text-white rounded font-bold transition-colors border border-grid-line">Withdraw</button>
             </div>
        </div>
         <div class="bg-surface-dark border border-grid-line rounded-xl p-6">
             <p class="text-text-secondary text-sm mb-1">Unrealized P&L</p>
             <h2 class="text-3xl font-mono font-bold mb-4 text-white">$0.00</h2>
             <p class="text-xs text-text-secondary">Across all open positions</p>
        </div>
         <div class="bg-surface-dark border border-grid-line rounded-xl p-6">
             <p class="text-text-secondary text-sm mb-1">Margin Level</p>
             <h2 class="text-3xl font-mono font-bold mb-4">--%</h2>
             <div class="w-full bg-surface-lighter h-1.5 rounded-full overflow-hidden">
                <div class="bg-primary h-full w-0"></div>
             </div>
        </div>
      </div>

      <h2 class="text-lg font-bold mb-4 text-text-secondary uppercase text-xs tracking-wider">Transaction History</h2>
      <div class="bg-surface-dark border border-grid-line rounded-lg overflow-hidden">
          <div class="p-8 text-center text-text-secondary">
            <span class="material-symbols-outlined text-4xl mb-2 opacity-50">history</span>
            <p>No recent transactions.</p>
          </div>
      </div>
    </div>
  `
})
export class WalletComponent { }
