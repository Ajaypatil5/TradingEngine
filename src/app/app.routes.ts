import { Routes } from '@angular/router';
import { MainLayoutComponent } from './layout/main-layout/main-layout.component';
import { DashboardComponent } from './features/dashboard/dashboard.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';
import { NewsComponent } from './features/news/news.component';
import { CommunityComponent } from './features/community/community.component';
import { AiBotComponent } from './features/ai-bot/ai-bot.component';
import { CopyTradingComponent } from './features/copy-trading/copy-trading.component';
import { WalletComponent } from './features/wallet/wallet.component';
import { SettingsComponent } from './features/settings/settings.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
            {
                path: 'dashboard',
                component: DashboardComponent
            },
            {
                path: 'news',
                component: NewsComponent
            },
            {
                path: 'community',
                component: CommunityComponent
            },
            {
                path: 'ai-bot',
                component: AiBotComponent
            },
            {
                path: 'copy-trading',
                component: CopyTradingComponent
            },
            {
                path: 'wallet',
                component: WalletComponent
            },
            {
                path: 'settings',
                component: SettingsComponent
            }
        ]
    }
];
