import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';

@Component({
    selector: 'app-register',
    standalone: true,
    imports: [CommonModule, RouterModule],
    template: `
    <div class="font-display bg-background-dark text-white antialiased selection:bg-primary/30 min-h-screen flex flex-col relative overflow-x-hidden">
        <!-- Ambient Background Effects -->
        <div class="absolute inset-0 z-0 overflow-hidden pointer-events-none">
            <div class="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-primary/10 blur-[100px] rounded-full opacity-60"></div>
            <div class="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[80px] rounded-full opacity-40"></div>
        </div>

        <div class="layout-container flex h-full grow flex-col w-full z-10 relative items-center justify-center p-4">
             <div class="bg-surface-dark border border-grid-line rounded-xl shadow-xl backdrop-blur-sm p-8 sm:p-10 flex flex-col gap-8 w-full max-w-[520px]">
                <!-- Header Section -->
                <div class="flex flex-col items-center gap-4 text-center">
                    <div class="h-16 w-16 bg-primary/20 rounded-full flex items-center justify-center mb-2">
                        <span class="material-symbols-outlined text-primary text-4xl" style="font-variation-settings: 'FILL' 1">trending_up</span>
                    </div>
                    <div class="flex flex-col gap-2">
                        <h1 class="text-white text-3xl font-black leading-tight tracking-tight">Create Account</h1>
                        <p class="text-text-secondary text-base font-normal">Start your trading journey with TradeHub today</p>
                    </div>
                </div>

                <!-- Form -->
                <form class="flex flex-col gap-5 w-full" (submit)="onSubmit($event)">
                    <!-- Username -->
                    <div class="flex flex-col gap-2">
                        <label class="text-white text-xs font-bold tracking-wider uppercase leading-normal">Username</label>
                        <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-grid-line bg-background-dark focus:border-primary h-12 placeholder:text-text-secondary/50 px-4 text-base transition-all" placeholder="trader123" type="text"/>
                    </div>

                    <!-- Email -->
                    <div class="flex flex-col gap-2">
                        <label class="text-white text-xs font-bold tracking-wider uppercase leading-normal">Email Address</label>
                        <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-grid-line bg-background-dark focus:border-primary h-12 placeholder:text-text-secondary/50 px-4 text-base transition-all" placeholder="you@example.com" type="email"/>
                    </div>

                    <!-- Password -->
                    <div class="flex flex-col gap-2">
                        <label class="text-white text-xs font-bold tracking-wider uppercase leading-normal">Password</label>
                        <div class="relative flex w-full items-stretch rounded-lg">
                            <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-grid-line bg-background-dark focus:border-primary h-12 placeholder:text-text-secondary/50 px-4 pr-12 text-base transition-all" placeholder="••••••••" type="password"/>
                            <div class="absolute right-0 top-0 h-full flex items-center justify-center pr-4 cursor-pointer text-text-secondary hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-xl">visibility_off</span>
                            </div>
                        </div>
                    </div>

                    <!-- Confirm Password -->
                    <div class="flex flex-col gap-2">
                        <label class="text-white text-xs font-bold tracking-wider uppercase leading-normal">Confirm Password</label>
                        <div class="relative flex w-full items-stretch rounded-lg">
                            <input class="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary/50 border border-grid-line bg-background-dark focus:border-primary h-12 placeholder:text-text-secondary/50 px-4 pr-12 text-base transition-all" placeholder="••••••••" type="password"/>
                            <div class="absolute right-0 top-0 h-full flex items-center justify-center pr-4 cursor-pointer text-text-secondary hover:text-primary transition-colors">
                                <span class="material-symbols-outlined text-xl">visibility_off</span>
                            </div>
                        </div>
                    </div>

                    <!-- Terms -->
                    <div class="flex items-start gap-3 mt-2">
                         <input class="mt-1 h-4 w-4 rounded border-grid-line bg-background-dark text-primary focus:ring-primary/50" id="terms" type="checkbox"/>
                         <label class="text-sm leading-tight text-text-secondary" for="terms">
                            I agree to the <a class="text-primary hover:underline cursor-pointer">Terms of Service</a> and <a class="text-primary hover:underline cursor-pointer">Privacy Policy</a>
                         </label>
                    </div>

                    <!-- Submit -->
                     <button class="mt-2 flex w-full cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-5 bg-primary hover:bg-blue-600 text-white text-base font-bold leading-normal tracking-[0.015em] transition-colors shadow-lg shadow-blue-900/20 active:scale-[0.98]">
                        <span class="truncate">Create Account</span>
                    </button>
                </form>

                <!-- Footer -->
                <div class="flex justify-center items-center gap-2 text-sm">
                    <p class="text-text-secondary">Already have an account?</p>
                    <a class="text-primary font-bold hover:underline cursor-pointer" routerLink="/login">Sign In</a>
                </div>
             </div>
        </div>
    </div>
  `
})
export class RegisterComponent {
    constructor(private router: Router) { }

    onSubmit(event: Event) {
        event.preventDefault();
        this.router.navigate(['/dashboard']);
    }
}
