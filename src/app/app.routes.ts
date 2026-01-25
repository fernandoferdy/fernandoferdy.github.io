import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Dashboard } from './components/dashboard/dashboard';
import { Error } from './components/error/error';

export const routes: Routes = [
    {
        path:'',
        redirectTo: 'home',
        pathMatch:'full'
    },
    {
        path: 'home',
        component: Home
    },{
        path: 'dashboard',
        component: Dashboard
    },{
        path: '**',
        component: Error
    },
];
