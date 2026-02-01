import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-ai-bot',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="p-6 h-full flex flex-col bg-background-dark text-white items-center justify-center">
      <div class="max-w-2xl w-full text-center">
        <div class="inline-flex p-4 rounded-full bg-primary/10 mb-6">
            <span class="material-symbols-outlined text-primary text-5xl">smart_toy</span>
        </div>
        <h1 class="text-3xl font-bold mb-4">TradeHub AI Assistant</h1>
        <p class="text-text-secondary mb-8">Configure your automated trading strategies fueled by advanced machine learning algorithms.</p>
        
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
            <div class="bg-surface-dark border border-grid-line p-6 rounded-lg hover:border-primary cursor-pointer transition-colors group">
                <span class="material-symbols-outlined text-trade-green text-3xl mb-3 group-hover:scale-110 transition-transform">trending_up</span>
                <h3 class="font-bold text-lg mb-1">Momentum Scalper</h3>
                <p class="text-sm text-text-secondary">High frequency trading based on short-term trend confirmation.</p>
            </div>
             <div class="bg-surface-dark border border-grid-line p-6 rounded-lg hover:border-primary cursor-pointer transition-colors group">
                <span class="material-symbols-outlined text-trade-red text-3xl mb-3 group-hover:scale-110 transition-transform">analytics</span>
                <h3 class="font-bold text-lg mb-1">Mean Reversion</h3>
                <p class="text-sm text-text-secondary">Identify overbought/oversold conditions for potential reversals.</p>
            </div>
        </div>
      </div>
    </div>
  `
})
export class AiBotComponent { }
