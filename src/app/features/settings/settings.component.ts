import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-settings',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="p-6 h-full overflow-y-auto bg-background-dark text-white max-w-4xl mx-auto">
      <h1 class="text-2xl font-bold mb-8">Platform Settings</h1>
      
      <div class="space-y-6">
        <!-- Section -->
        <div class="bg-surface-dark border border-grid-line rounded-lg p-6">
            <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">person</span>
                Profile
            </h3>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div class="flex flex-col gap-2">
                    <label class="text-xs text-text-secondary uppercase font-bold">Display Name</label>
                    <input type="text" value="Ajay" class="bg-background-dark border border-grid-line p-2 rounded text-white" />
                </div>
                 <div class="flex flex-col gap-2">
                    <label class="text-xs text-text-secondary uppercase font-bold">Email</label>
                    <input type="email" value="ajay.patil28@zohomail.in" disabled class="bg-background-dark border border-grid-line p-2 rounded text-text-secondary cursor-not-allowed" />
                </div>
            </div>
        </div>

        <!-- Section -->
         <div class="bg-surface-dark border border-grid-line rounded-lg p-6">
            <h3 class="text-lg font-bold mb-4 flex items-center gap-2">
                <span class="material-symbols-outlined text-primary">palette</span>
                Appearance
            </h3>
            <div class="flex items-center justify-between py-2 border-b border-grid-line/50">
                <span>Dark Mode</span>
                <div class="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                    <div class="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
                </div>
            </div>
             <div class="flex items-center justify-between py-2">
                <span>Show Grid Lines</span>
                <div class="w-10 h-6 bg-primary rounded-full relative cursor-pointer">
                    <div class="absolute right-1 top-1 size-4 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
      </div>
    </div>
  `
})
export class SettingsComponent { }
