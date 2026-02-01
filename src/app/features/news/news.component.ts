import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-news',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="p-6 h-full overflow-y-auto bg-background-dark text-white">
      <h1 class="text-2xl font-bold mb-6">Market News</h1>
      <div class="grid gap-4">
        <div *ngFor="let i of [1,2,3,4,5]" class="p-4 bg-surface-dark border border-grid-line rounded-lg hover:border-primary transition-colors cursor-pointer">
            <div class="flex justify-between items-start mb-2">
                <span class="text-xs text-primary font-bold bg-primary/10 px-2 py-0.5 rounded">BREAKING</span>
                <span class="text-xs text-text-secondary">2 mins ago</span>
            </div>
            <h3 class="font-bold text-lg mb-2">Bitcoin Surges Past $45k Resistance Level</h3>
            <p class="text-text-secondary text-sm">Major cryptocurrency markets are seeing significant upward momentum as institutional interest continues to grow...</p>
        </div>
      </div>
    </div>
  `
})
export class NewsComponent { }
