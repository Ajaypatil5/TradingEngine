import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
    selector: 'app-sidebar',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <aside 
      class="flex-shrink-0 flex flex-col border-r border-grid-line bg-sidebar-bg z-10 transition-all duration-300 h-full overflow-hidden"
      [class.w-16]="collapsed"
      [class.w-64]="!collapsed"
    >
      <div 
        class="flex items-center gap-3 py-6 border-b border-grid-line/30 mb-2 overflow-hidden whitespace-nowrap"
        [class.justify-center]="collapsed"
        [class.px-4]="!collapsed"
      >
        <span class="material-symbols-outlined text-primary text-2xl flex-shrink-0" style="font-variation-settings: 'FILL' 1">candlestick_chart</span>
        <span *ngIf="!collapsed" class="font-bold text-lg text-white transition-opacity duration-300">TradeHub</span>
      </div>

      <nav class="flex-1 flex flex-col gap-2 overflow-y-auto overflow-x-hidden">
        <div 
          *ngFor="let item of navItems" 
          class="nav-item group relative flex items-center gap-3 px-4 py-3 cursor-pointer border-r-4 border-transparent hover:text-white transition-colors text-text-secondary whitespace-nowrap"
          [routerLink]="item.route"
          routerLinkActive="active"
          [attr.title]="collapsed ? item.label : ''"
          [class.justify-center]="collapsed"
          [class.px-0]="collapsed"
          [class.py-4]="collapsed"
        >
          <span class="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform flex-shrink-0">{{ item.icon }}</span>
          <span *ngIf="!collapsed" class="text-sm font-medium">{{ item.label }}</span>
        </div>
      </nav>

      <div class="border-t border-grid-line/30 pt-2 pb-4 flex flex-col gap-2">
        <div 
            class="nav-item flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-white transition-colors cursor-pointer whitespace-nowrap" 
            title="Settings" 
            routerLink="/settings" 
            routerLinkActive="active"
            [class.justify-center]="collapsed"
            [class.px-0]="collapsed"
            [class.py-4]="collapsed"
        >
          <span class="material-symbols-outlined flex-shrink-0">settings</span>
          <span *ngIf="!collapsed" class="text-sm font-medium">Settings</span>
        </div>
        <div 
            class="nav-item flex items-center gap-3 px-4 py-3 text-text-secondary hover:text-white transition-colors cursor-pointer whitespace-nowrap" 
            title="Logout" 
            (click)="logout()"
            [class.justify-center]="collapsed"
            [class.px-0]="collapsed"
            [class.py-4]="collapsed"
        >
          <span class="material-symbols-outlined flex-shrink-0">logout</span>
          <span *ngIf="!collapsed" class="text-sm font-medium">Logout</span>
        </div>
        
        <!-- Toggle Button -->
        <div 
            class="mt-2 flex items-center justify-center p-2 cursor-pointer text-text-secondary hover:text-white transition-colors"
            (click)="toggle.emit()"
        >
            <span class="material-symbols-outlined">{{ collapsed ? 'chevron_right' : 'chevron_left' }}</span>
        </div>
      </div>
    </aside>
  `,
    styles: [`
    .nav-item.active {
      @apply text-primary bg-nav-active border-primary;
    }
  `]
})
export class SidebarComponent {
    @Input() collapsed = true;
    @Output() toggle = new EventEmitter<void>();

    constructor(private router: Router) { }

    navItems = [
        { icon: 'grid_view', label: 'Dashboard', route: '/dashboard' },
        { icon: 'news', label: 'News', route: '/news' },
        { icon: 'groups', label: 'Community', route: '/community' },
        { icon: 'smart_toy', label: 'AI Bot', route: '/ai-bot' },
        { icon: 'content_copy', label: 'Copy Trading', route: '/copy-trading' },
        { icon: 'account_balance_wallet', label: 'Wallet', route: '/wallet' },
    ];

    logout() {
        this.router.navigate(['/login']);
    }
}
