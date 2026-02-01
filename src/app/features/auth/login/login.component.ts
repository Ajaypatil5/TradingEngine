import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="font-display bg-background-dark text-white antialiased selection:bg-primary/30 min-h-screen flex flex-col relative overflow-x-hidden">
      <!-- Ambient Background Effects -->
      <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/10 blur-[100px] rounded-full opacity-60"></div>
        <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[80px] rounded-full opacity-40"></div>
      </div>

      <!-- Main Content Container -->
      <main class="layout-container flex grow flex-col items-center justify-center p-4 relative z-10">
        <!-- Login Card -->
        <div class="w-full max-w-[480px] flex flex-col gap-8 rounded-xl bg-surface-dark border border-grid-line p-8 md:p-10 shadow-2xl backdrop-blur-sm">
          
          <!-- Branding Header -->
          <div class="flex flex-col items-center gap-6">
            <div class="flex items-center gap-3">
              <div class="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-lg shadow-primary/20">
                <span class="material-symbols-outlined text-[24px]" style="font-variation-settings: 'FILL' 1">candlestick_chart</span>
              </div>
              <span class="text-2xl font-bold tracking-tight text-white font-display">TradeHub</span>
            </div>
            <div class="flex flex-col items-center gap-2 text-center">
              <h2 class="text-3xl font-black leading-tight tracking-[-0.033em] text-white">Welcome Back</h2>
              <p class="text-text-secondary text-base font-normal">Sign in to continue trading</p>
            </div>
          </div>

          <!-- Login Form -->
          <form class="flex flex-col gap-5" (submit)="onSubmit($event)">
            <!-- Email Field -->
            <div class="flex flex-col gap-2">
              <label class="text-base font-medium text-white" for="email">Email Address</label>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <span class="material-symbols-outlined text-[20px]">mail</span>
                </div>
                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-grid-line bg-background-dark focus:border-primary h-12 pl-11 pr-4 placeholder:text-text-secondary/50 text-base font-normal leading-normal transition-all" id="email" placeholder="name@company.com" type="email"/>
              </div>
            </div>

            <!-- Password Field -->
            <div class="flex flex-col gap-2">
              <div class="flex items-center justify-between">
                <label class="text-base font-medium text-white" for="password">Password</label>
                <a class="text-sm font-semibold text-primary hover:text-blue-400 transition-colors cursor-pointer">Forgot Password?</a>
              </div>
              <div class="relative group">
                <div class="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-slate-500">
                  <span class="material-symbols-outlined text-[20px]">lock</span>
                </div>
                <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-grid-line bg-background-dark focus:border-primary h-12 pl-11 pr-4 placeholder:text-text-secondary/50 text-base font-normal leading-normal transition-all" id="password" placeholder="••••••••" type="password"/>
              </div>
            </div>

            <!-- Login Button -->
            <button class="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
              <span class="truncate">Log In</span>
            </button>
            
            <div class="relative flex items-center py-2">
                <div class="flex-grow border-t border-grid-line"></div>
                <span class="flex-shrink-0 mx-4 text-xs text-text-secondary uppercase font-semibold">Or</span>
                <div class="flex-grow border-t border-grid-line"></div>
            </div>

            <button type="button" (click)="onExplore()" class="flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-surface-dark border border-grid-line hover:bg-surface-lighter hover:border-primary text-text-secondary hover:text-white text-base font-bold leading-normal tracking-[0.015em] transition-all active:scale-[0.98] group">
              <span class="truncate mr-2">Explore Demo UI</span>
              <span class="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </button>
          </form>

          <!-- Footer Links -->
          <div class="flex items-center justify-center gap-1.5 text-sm text-text-secondary pt-2 border-t border-grid-line">
            <p>Don't have an account?</p>
            <a class="font-bold text-primary hover:underline hover:text-blue-400 cursor-pointer">Create Account</a>
          </div>
        </div>

        <!-- Platform Info Footer -->
        <div class="mt-8 text-center text-xs text-text-secondary">
          <p>© 2024 TradeHub Inc. Secure Trading Platform.</p>
        </div>
      </main>
    </div>
  `
})
export class LoginComponent {
    constructor(private router: Router) { }

    onSubmit(event: Event) {
        event.preventDefault();
        this.router.navigate(['/dashboard']);
    }

    onExplore() {
        this.router.navigate(['/dashboard']);
    }
}
