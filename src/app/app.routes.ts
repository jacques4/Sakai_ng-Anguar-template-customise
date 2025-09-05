import { Routes } from '@angular/router';
import { Layout } from './layout/component/layout/layout';
import { Dashboard } from './pages/dashboard/dashboard/dashboard';
import { Landing } from './pages/landing/landing/landing';
import { Notfound } from './pages/notfound/notfound';
import { Documentation } from './pages/documentation/documentation';

export const routes: Routes = [

  {
        path: '',
        component: Layout,
        children: [
            { path: '', component: Dashboard },
            { path: 'uikit', loadChildren: () => import('../app/pages/uikit/uikit.routes') },
            { path: 'documentation', component: Documentation },
            { path: 'pages', loadChildren: () => import('../app/pages/pages.routes') }
        ]
    },
    { path: 'landing', component: Landing },
    { path: 'notfound', component: Notfound },
    { path: 'auth', loadChildren: () => import('../app/pages/auth/auth.routes') },
    { path: '**', redirectTo: '/notfound' }

];
