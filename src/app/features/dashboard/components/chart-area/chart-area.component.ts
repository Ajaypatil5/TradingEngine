import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-chart-area',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="flex-1 flex flex-col min-w-0 bg-background-dark h-full">
        <!-- Chart Header -->
      <div class="h-12 flex items-center justify-between px-4 border-b border-grid-line bg-surface-dark flex-shrink-0">
        <div class="flex items-center gap-4">
          <div class="flex items-center gap-2">
            <h2 class="text-base font-bold text-white">XPDUSD</h2>
            <span class="text-xs bg-surface-lighter border border-grid-line px-1.5 rounded text-text-secondary">H1</span>
          </div>
          <div class="h-4 w-px bg-grid-line"></div>
          <div class="flex items-center gap-1">
            <span class="material-symbols-outlined text-text-secondary hover:text-white cursor-pointer p-1">schedule</span>
            <span class="material-symbols-outlined text-primary hover:text-white cursor-pointer p-1" style="font-variation-settings: 'FILL' 1">candlestick_chart</span>
            <span class="material-symbols-outlined text-text-secondary hover:text-white cursor-pointer p-1">ssid_chart</span>
          </div>
          <div class="h-4 w-px bg-grid-line"></div>
          <div class="flex items-center gap-2">
            <div class="size-2 rounded-full bg-red-500 animate-pulse"></div>
            <span class="text-[10px] font-medium text-text-secondary uppercase tracking-wider">Market Closed</span>
          </div>
        </div>
        <div class="flex items-center gap-2">
          <button class="p-1.5 hover:bg-surface-lighter rounded text-text-secondary"><span class="material-symbols-outlined text-lg">settings</span></button>
          <button class="p-1.5 hover:bg-surface-lighter rounded text-text-secondary"><span class="material-symbols-outlined text-lg">fullscreen</span></button>
          <button class="p-1.5 hover:bg-surface-lighter rounded text-text-secondary"><span class="material-symbols-outlined text-lg">photo_camera</span></button>
        </div>
      </div>

      <!-- Chart Visual -->
      <div class="flex-1 relative bg-background-dark overflow-hidden flex flex-col">
        <!-- Grid Background -->
        <div class="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-10 pointer-events-none z-0">
          <div *ngFor="let i of [1,2,3,4,5,6,7,8,9,10,11,12]" class="border-r border-b border-grid-line"></div>
          <div *ngFor="let i of [1,2,3,4,5,6,7,8,9,10,11,12]" class="border-r border-b border-grid-line"></div>
        </div>

        <!-- Candlesticks (Simulated from HTML) -->
        <div class="flex-1 flex items-end justify-between px-8 relative z-10 pt-10 pb-16 gap-1">
             <!-- Using a loop for cleaner code if real data, but for visual fidelity to image, hardcoding a few or using simple loop with random heights for demo -->
             <div *ngFor="let candle of candles" class="candlestick h-full relative w-1 flex-1 mx-0.5"> 
                <div class="candlestick-wick absolute left-1/2 w-px transform -translate-x-1/2 z-10" 
                     [ngClass]="candle.up ? 'bg-trade-green' : 'bg-trade-red'"
                     [style.top]="candle.high + '%'" 
                     [style.bottom]="(100 - candle.low) + '%'"></div> 
                <div class="candlestick-body absolute left-0 right-0 z-20"
                     [ngClass]="candle.up ? 'bg-trade-green' : 'bg-trade-red'"
                     [style.top]="candle.open < candle.close ? candle.open + '%' : candle.close + '%'" 
                     [style.height]="pkgMath.abs(candle.open - candle.close) + '%'"></div> 
             </div>
        </div>

        <div class="absolute w-full border-b border-dashed border-trade-green z-20 opacity-40" style="top: 25%;"></div>
        <div class="absolute w-full border-b border-dashed border-trade-red z-20 opacity-40" style="top: 75%;"></div>
        <div class="absolute w-full border-b border-dashed border-primary z-20 opacity-70 flex items-center" style="top: 60.5%;">
          <div class="absolute right-[52px] bg-primary text-white text-[10px] px-2 font-bold flex items-center h-5 rounded-l-sm z-40">1688.53</div>
        </div>

        <!-- Y Axis -->
        <div class="absolute right-0 top-0 bottom-0 w-[52px] flex flex-col justify-between text-[10px] text-text-secondary font-mono py-4 items-end pr-1 pointer-events-none z-30 bg-background-dark/95 border-l border-grid-line">
            <span>1740.00</span>
            <span>1730.00</span>
            <div class="flex items-center gap-1">
                <span class="text-[9px] font-bold text-trade-green">High</span>
                <span class="bg-trade-green text-black px-1 font-bold rounded-sm">1725.40</span>
            </div>
            <span>1710.00</span>
            <span>1700.00</span>
            <span class="text-white bg-primary px-1 font-bold rounded-sm">1688.53</span>
            <span>1680.00</span>
            <div class="flex items-center gap-1">
                <span class="text-[9px] font-bold text-trade-red">Low</span>
                <span class="bg-trade-red text-white px-1 font-bold rounded-sm">1672.15</span>
            </div>
        </div>

        <!-- X Axis -->
        <div class="absolute bottom-0 left-0 right-[52px] h-6 flex justify-between text-[10px] text-text-secondary font-mono px-4 items-center border-t border-grid-line bg-background-dark z-30">
            <span>20:00</span><span>20:15</span><span>20:30</span><span>20:45</span><span>21:00</span><span>21:15</span><span>21:30</span><span>21:45</span><span>22:00</span>
        </div>
      </div>
    </div>
  `
})
export class ChartAreaComponent {
    pkgMath = Math;
    // randomized candles for demo
    candles = Array.from({ length: 30 }, () => {
        const up = Math.random() > 0.5;
        const high = 20 + Math.random() * 40; // top %
        const low = high + 10 + Math.random() * 20; // bottom %
        // for CSS 'top' and 'height', we need logic. 
        // In CSS top: 0 is top. 
        // Let's simluate: high (small val), low (large val).
        // body is between open/close.
        const top = 20 + Math.random() * 40;
        const height = 5 + Math.random() * 15;

        return {
            up,
            high: top - (Math.random() * 5),
            low: (100 - (top + height + Math.random() * 5)), // bottom percentage for style.bottom? No I used top/height logic in template
            // actually let's re-do the template logic to be simpler:
            // container is h-full. candle top is %, height is %.
            // wick top %, height %.
            open: top,
            close: top + height,
        }
    });
}
