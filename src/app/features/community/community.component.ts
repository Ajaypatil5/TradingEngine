import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-community',
    standalone: true,
    imports: [CommonModule],
    template: `
    <div class="h-full flex flex-col min-w-0 overflow-hidden relative bg-background-dark text-white font-display">
        <!-- Header -->
        <header class="h-16 border-b border-grid-line flex items-center px-4 md:px-8 shrink-0 bg-background-dark/95 backdrop-blur z-10 justify-between">
            <div class="flex-1 max-w-xl">
                <div class="flex w-full items-center rounded-lg h-10 bg-surface-dark border border-grid-line group focus-within:ring-1 ring-primary/50 transition-all">
                    <div class="text-text-secondary flex items-center justify-center pl-3 pr-2">
                        <span class="material-symbols-outlined !text-[20px]">search</span>
                    </div>
                    <input class="w-full bg-transparent border-none text-white placeholder-text-secondary focus:ring-0 text-sm h-full" placeholder="Search symbols, people, or ideas..."/>
                </div>
            </div>
            <div class="ml-4 flex items-center gap-4">
               <button class="px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-bold rounded-lg transition-colors shadow-lg shadow-blue-900/20">
                    Invite Friends
               </button>
            </div>
        </header>

        <!-- Main Content -->
        <div class="flex-1 overflow-y-auto overflow-x-hidden">
            <div class="max-w-[1400px] mx-auto w-full flex justify-center p-4 md:p-6 lg:p-8">
                <div class="w-full flex flex-col lg:flex-row gap-8 items-start">
                    
                    <!-- Feed Section -->
                    <div class="flex-1 flex flex-col gap-6 min-w-0">
                        <div>
                            <h1 class="text-white tracking-tight text-3xl font-bold leading-tight pb-4">Community Feed</h1>
                            <div class="flex gap-3 overflow-x-auto scrollbar-hide pb-2">
                                <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-primary px-4 text-white text-sm font-medium transition-colors">
                                    All Posts
                                </button>
                                <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-dark hover:bg-surface-lighter px-4 text-white text-sm font-medium transition-colors">
                                    Forex
                                </button>
                                <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-dark hover:bg-surface-lighter px-4 text-white text-sm font-medium transition-colors">
                                    Crypto
                                </button>
                                <button class="flex h-8 shrink-0 items-center justify-center gap-x-2 rounded-lg bg-surface-dark hover:bg-surface-lighter px-4 text-white text-sm font-medium transition-colors">
                                    Stocks
                                </button>
                            </div>
                        </div>

                        <!-- Create Post -->
                        <div class="flex flex-col w-full rounded-xl bg-surface-dark border border-grid-line overflow-hidden">
                            <div class="flex p-4 gap-3">
                                <div class="size-10 rounded-full bg-cover bg-center shrink-0" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAdqmM3xZrC5UJTbMmxOGXQBT2ehmWW4JypcwIkKUAjH0MGIE4_fD_g0FMtGjF2rFaVcLQ66H8J0LJxR5E7KbHoCB4DzY6ejY3iXxfTk7SVKtHBN6oW2YmrIJeEy0uNtigcLhbBUbs7ROxeWf3OftX3FSQl9UTiEi766jQhqOlPByfpiqLojN_N2lpWkP6QwzGRNpLz6ciP_PpBlwRcGxsIRVehmMshMKLRBNZI7s0UczbwmTohU5SJLawR4D5uslmuQq0qSuCwrOmw');"></div>
                                <div class="flex-1">
                                    <textarea class="w-full bg-transparent border-none text-white placeholder-text-secondary/50 focus:ring-0 text-base resize-none min-h-[80px]" placeholder="What's your move today? Use $ for tickers"></textarea>
                                </div>
                            </div>
                            <div class="bg-black/20 px-4 py-2 flex justify-between items-center border-t border-grid-line">
                                <div class="flex gap-2 text-primary">
                                    <button class="p-2 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center">
                                        <span class="material-symbols-outlined !text-[20px]">add_chart</span>
                                    </button>
                                    <button class="p-2 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center">
                                        <span class="material-symbols-outlined !text-[20px]">image</span>
                                    </button>
                                    <button class="p-2 hover:bg-white/5 rounded-full transition-colors flex items-center justify-center">
                                        <span class="material-symbols-outlined !text-[20px]">sentiment_satisfied</span>
                                    </button>
                                </div>
                                <button class="bg-primary hover:bg-blue-600 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors shadow-lg shadow-blue-500/20">
                                    Post
                                </button>
                            </div>
                        </div>

                        <!-- Posts Feed -->
                        <article class="flex flex-col w-full rounded-xl bg-surface-dark border border-grid-line p-5 gap-4 hover:border-grid-line/80 transition-colors">
                            <div class="flex justify-between items-start">
                                <div class="flex gap-3">
                                    <div class="size-12 rounded-full bg-cover bg-center shrink-0 border border-white/10" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD6Wly6nHsyq4E0EGG6Dm9TIPTNpfa5DmpAbm3_Gufr4zTbWKio8Wo8y5CkIWQhqg5SO778tggvdM7LQ6I-0vdhqLU16r9hitcmztGElFoOqjoPgQZnxG7_cvSjV6IEnj0ytTtoiu3amLr5ff6zQgKBfLVW1uWr5cjHY9vPC864jN3bGYCQlSv49hnkS19AU064NzZWB915fE8n8SaDjcAKrLF6CZgOWPcB6D8dRWnrOEY3VzdCMAD8fd4X8Fqoa2IqQBeOcpM-liQq');"></div>
                                    <div class="flex flex-col">
                                        <div class="flex items-center gap-2">
                                            <h3 class="text-white font-semibold">TraderMike</h3>
                                            <span class="text-text-secondary text-sm">@tmike_charts</span>
                                            <span class="text-text-secondary text-xs">• 2h ago</span>
                                        </div>
                                        <div class="flex items-center gap-2 mt-0.5">
                                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-red-500/20 text-red-400 border border-red-500/20">BEARISH</span>
                                        </div>
                                    </div>
                                </div>
                                <button class="text-text-secondary hover:text-white">
                                    <span class="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div class="text-gray-300 text-base leading-relaxed">
                                Gold is hitting major resistance at 2040. Looking for a short entry here. The double top pattern on the 4H is pretty clear. <span class="text-primary hover:underline cursor-pointer">$XAUUSD</span> <span class="text-primary hover:underline cursor-pointer">#Forex</span>
                            </div>
                            <div class="w-full h-64 rounded-lg bg-background-dark border border-grid-line relative overflow-hidden group cursor-pointer">
                                <div class="absolute inset-0 bg-cover bg-center opacity-80 group-hover:opacity-100 transition-opacity" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuD8q4mExk0Gue_mdDSvZhflKKfJwkbgpIMZPByigF0FknQxiJceoAw0HGvT6ybEKhREJ-4sxaFNBwcjLiIGuPmynrCaw_MMM9vJ2Hb5gtFLS7IQh7yUH1SA5pD7I5mPZi7YODwF1KA4iEf-nctKnze7lXykeTYKMOemUlvqrsM6DZSDVwxf7H4cJsXb7crvPLlfwCumRtVfrN686nqXarlsvKHvrxYBq8XmbB3SM7w_0wdnxVIQmGYzVpxlcPYEzvLf2uJYM5zCUqeg');"></div>
                                <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/20">
                                    <span class="material-symbols-outlined text-white drop-shadow-md !text-[48px]">fullscreen</span>
                                </div>
                            </div>
                            <div class="flex items-center justify-between pt-2 border-t border-grid-line mt-2">
                                <div class="flex gap-6">
                                    <button class="flex items-center gap-1.5 text-text-secondary hover:text-red-400 transition-colors group">
                                        <span class="material-symbols-outlined !text-[20px] group-hover:fill-current">favorite</span>
                                        <span class="text-sm font-medium">24</span>
                                    </button>
                                    <button class="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors group">
                                        <span class="material-symbols-outlined !text-[20px] group-hover:fill-current">chat_bubble</span>
                                        <span class="text-sm font-medium">5</span>
                                    </button>
                                    <button class="flex items-center gap-1.5 text-text-secondary hover:text-green-400 transition-colors">
                                        <span class="material-symbols-outlined !text-[20px]">ios_share</span>
                                    </button>
                                </div>
                                <div class="flex items-center gap-1.5 text-text-secondary text-sm">
                                    <span class="material-symbols-outlined !text-[18px]">visibility</span>
                                    <span>1.2k</span>
                                </div>
                            </div>
                        </article>

                         <article class="flex flex-col w-full rounded-xl bg-surface-dark border border-grid-line p-5 gap-4 hover:border-grid-line/80 transition-colors">
                            <div class="flex justify-between items-start">
                                <div class="flex gap-3">
                                    <div class="size-12 rounded-full bg-cover bg-center shrink-0 border border-white/10" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDlWQNAV53r0StFMVzta2tPCnR8aG-nTNxX9WtASDmy2uj_qk1gPUuS7FTZvPUQzAN_H_98E9ABhaRHfAa-ZPoK4ITcioK5LqKGA18p1IfsUQBE8maFra4LVfAUbIqpGgVfErrKuMfqbUO32RHBJ4rNmXDv8sH-_oqpVheuaoYsviV1445WB1EnJZft0y8eau7lFz_r7E4eLc09r-dMjq-WXoGNszzNq9ovhNJHlZWpvUX56A8BNyUon3DRnqtW8stHHZLM2GM1TPco');"></div>
                                    <div class="flex flex-col">
                                        <div class="flex items-center gap-2">
                                            <h3 class="text-white font-semibold">ForexPro2024</h3>
                                            <span class="text-text-secondary text-sm">@fx_guru</span>
                                            <span class="text-text-secondary text-xs">• 5h ago</span>
                                        </div>
                                        <div class="flex items-center gap-2 mt-0.5">
                                            <span class="px-2 py-0.5 rounded text-[10px] font-bold bg-green-500/20 text-green-400 border border-green-500/20">BULLISH</span>
                                        </div>
                                    </div>
                                </div>
                                <button class="text-text-secondary hover:text-white">
                                    <span class="material-symbols-outlined">more_horiz</span>
                                </button>
                            </div>
                            <div class="text-gray-300 text-base leading-relaxed">
                                Great volatility on the Yen pairs this morning! 🚀 <br/>
                                Who else caught that dip on <span class="text-primary hover:underline cursor-pointer">$USDJPY</span>? We might see a retracement to 145.50 levels before the next leg up.
                            </div>
                            <div class="flex items-center justify-between pt-2 border-t border-grid-line mt-2">
                                <div class="flex gap-6">
                                    <button class="flex items-center gap-1.5 text-red-400 transition-colors group">
                                        <span class="material-symbols-outlined !text-[20px] fill-current" style="font-variation-settings: 'FILL' 1;">favorite</span>
                                        <span class="text-sm font-medium">112</span>
                                    </button>
                                    <button class="flex items-center gap-1.5 text-text-secondary hover:text-primary transition-colors group">
                                        <span class="material-symbols-outlined !text-[20px] group-hover:fill-current">chat_bubble</span>
                                        <span class="text-sm font-medium">45</span>
                                    </button>
                                    <button class="flex items-center gap-1.5 text-text-secondary hover:text-green-400 transition-colors">
                                        <span class="material-symbols-outlined !text-[20px]">ios_share</span>
                                    </button>
                                </div>
                                <div class="flex items-center gap-1.5 text-text-secondary text-sm">
                                    <span class="material-symbols-outlined !text-[18px]">visibility</span>
                                    <span>3.4k</span>
                                </div>
                            </div>
                        </article>
                    </div>

                    <!-- Right Sidebar -->
                    <div class="hidden lg:flex flex-col w-80 shrink-0 gap-6 sticky top-6">
                        <!-- Market Pulse -->
                        <div class="bg-surface-dark rounded-xl border border-grid-line p-4 flex flex-col gap-4">
                            <div class="flex items-center justify-between pb-2 border-b border-grid-line">
                                <h2 class="text-white font-bold text-lg">Market Pulse</h2>
                                <span class="material-symbols-outlined text-primary animate-pulse !text-[20px]">ecg_heart</span>
                            </div>
                            <div class="flex flex-col gap-1">
                                <div class="flex items-center justify-between py-2 hover:bg-white/5 px-2 rounded-lg cursor-pointer transition-colors">
                                    <div class="flex items-center gap-3">
                                        <div class="size-8 rounded bg-white/5 flex items-center justify-center font-bold text-xs text-text-secondary">NVDA</div>
                                        <div class="flex flex-col">
                                            <span class="text-white text-sm font-medium">NVIDIA Corp</span>
                                            <span class="text-text-secondary text-xs">Stock</span>
                                        </div>
                                    </div>
                                    <span class="text-green-400 text-sm font-medium bg-green-500/10 px-2 py-1 rounded">+2.4%</span>
                                </div>
                                <div class="flex items-center justify-between py-2 hover:bg-white/5 px-2 rounded-lg cursor-pointer transition-colors">
                                    <div class="flex items-center gap-3">
                                        <div class="size-8 rounded bg-white/5 flex items-center justify-center font-bold text-xs text-text-secondary">BTC</div>
                                        <div class="flex flex-col">
                                            <span class="text-white text-sm font-medium">Bitcoin</span>
                                            <span class="text-text-secondary text-xs">Crypto</span>
                                        </div>
                                    </div>
                                    <span class="text-red-400 text-sm font-medium bg-red-500/10 px-2 py-1 rounded">-1.1%</span>
                                </div>
                                <div class="flex items-center justify-between py-2 hover:bg-white/5 px-2 rounded-lg cursor-pointer transition-colors">
                                    <div class="flex items-center gap-3">
                                        <div class="size-8 rounded bg-white/5 flex items-center justify-center font-bold text-xs text-text-secondary">EUR</div>
                                        <div class="flex flex-col">
                                            <span class="text-white text-sm font-medium">EUR/USD</span>
                                            <span class="text-text-secondary text-xs">Forex</span>
                                        </div>
                                    </div>
                                    <span class="text-green-400 text-sm font-medium bg-green-500/10 px-2 py-1 rounded">+0.2%</span>
                                </div>
                            </div>
                            <button class="w-full py-2 text-sm text-primary font-medium hover:bg-white/5 rounded-lg transition-colors">View All Markets</button>
                        </div>

                        <!-- Who to Follow -->
                        <div class="bg-surface-dark rounded-xl border border-grid-line p-4 flex flex-col gap-4">
                            <div class="flex items-center justify-between pb-2 border-b border-grid-line">
                                <h2 class="text-white font-bold text-lg">Who to Follow</h2>
                            </div>
                            <div class="flex flex-col gap-3">
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <div class="size-9 rounded-full bg-cover bg-center shrink-0" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAZAxcaCUKg-YdSkULH0y8ly7a3syVVhkxwfDpgwKAVzi0LJJ11zmlvA-DUcSfEeP3j3hOCy4pQNIQNLU38BT__WMsOhdLu2t5rZ0USY7DgEu-wVMUQ-3CSDlUcXXG3SFxn1Ckh7F3OKrkW1MegW9VkBofqMhZmbCm7Wp1D31xCaMZpChclQ4HC-Uho56fuH-hzVTNXEjfpHOetZNhmJmbwZe3Aj-6GrwGaEbxEyC8JMOPOzo_RQX3IsBJ1-9kbIolRR7Rdfl4cj6K7');"></div>
                                        <div class="flex flex-col">
                                            <span class="text-white text-sm font-medium hover:underline cursor-pointer">CryptoKing</span>
                                            <span class="text-text-secondary text-xs">@cking_alpha</span>
                                        </div>
                                    </div>
                                    <button class="text-primary hover:bg-primary/10 p-1.5 rounded-lg transition-colors">
                                        <span class="material-symbols-outlined !text-[20px]">person_add</span>
                                    </button>
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="flex items-center gap-2">
                                        <div class="size-9 rounded-full bg-cover bg-center shrink-0" style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAPGVJKCkB7nI1Aa5FbEV_XoZd2IIr1A4ble4FivpBjTAh0MqbI4eJZEbDEe8KzrD1_X0vQ7TPiXOuJtj7XrjR596iXocWdXpliqvXT6Bd_G1xMxS9XQqovq89PNEQH-a4C3BULVVHjpIBI4iz-YCxCOgJRJ8IiopRDLV10Y4dJRJvw2wkelW3GvjmRWDOacm9OotxztxiAw9QH1x8-cwe3P8y0Mgy8yqDaZOKjT7ccB0CkpR0H7YpMwzITt83AGEWbmCV3o1nmcEYv');"></div>
                                        <div class="flex flex-col">
                                            <span class="text-white text-sm font-medium hover:underline cursor-pointer">AnnaStocks</span>
                                            <span class="text-text-secondary text-xs">@annatrades</span>
                                        </div>
                                    </div>
                                    <button class="text-primary hover:bg-primary/10 p-1.5 rounded-lg transition-colors">
                                        <span class="material-symbols-outlined !text-[20px]">person_add</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  `
})
export class CommunityComponent { }
