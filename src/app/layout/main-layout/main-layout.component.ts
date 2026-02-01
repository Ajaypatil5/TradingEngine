import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';

@Component({
    selector: 'app-main-layout',
    standalone: true,
    imports: [CommonModule, RouterOutlet, SidebarComponent, HeaderComponent],
    template: `
    <div class="flex flex-col h-screen bg-background-dark text-white overflow-hidden font-display">
      <app-header />
      <div class="flex flex-1 overflow-hidden">
        <app-sidebar [collapsed]="isSidebarCollapsed" (toggle)="toggleSidebar()" />
        <main class="flex-1 overflow-hidden relative">
          <router-outlet />
        </main>
      </div>
      <footer class="h-8 bg-surface-dark border-t border-grid-line flex items-center px-4 justify-between text-[11px] font-mono select-none flex-shrink-0 z-30 relative">
        <div class="flex items-center gap-6">
            <div class="flex items-center gap-2">
                <span class="text-text-secondary font-bold uppercase">Balance:</span>
                <span class="font-bold text-white tracking-wide">99,949.19</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-text-secondary font-bold uppercase">Equity:</span>
                <span class="font-bold text-white tracking-wide">99,949.19</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-text-secondary font-bold uppercase">Margin:</span>
                <span class="font-bold text-white tracking-wide">0.00</span>
            </div>
            <div class="flex items-center gap-2">
                <span class="text-text-secondary font-bold uppercase">P&L:</span>
                <span class="font-bold text-white tracking-wide">0.00</span>
            </div>
        </div>
        <div class="flex items-center gap-4 text-text-secondary">
            <div class="flex items-center gap-1.5">
                <div class="size-2 rounded-full bg-trade-green animate-pulse"></div>
                <span>Connected <span class="text-white">12ms</span></span>
            </div>
            <div class="h-3 w-px bg-grid-line"></div>
            <span>Server: <span class="text-white">UTC+0</span></span>
        </div>
      </footer>
    </div>
  `
})
export class MainLayoutComponent {
    isSidebarCollapsed = true;

    toggleSidebar() {
        this.isSidebarCollapsed = !this.isSidebarCollapsed;
    }
}
