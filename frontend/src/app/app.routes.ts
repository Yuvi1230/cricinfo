import { Routes } from '@angular/router';
import { PointTableComponent } from './pages/point-table/point-table.component';
import { HistoryComponent } from './pages/history/history.component';
import { HomeComponent } from './pages/home/home.component';
import { LiveComponent } from './pages/live/live.component';

export const routes: Routes = [
    {
        path:"home",
        component:HomeComponent,
        title:"Home |CrickInformer"
    },
    {   path:"history",
        component:HistoryComponent,
        title:"Match History |CrickInformer"
    },
    {
        path:"point-table",
        component:PointTableComponent,
         title:"Points Table |CrickInformer"
    },
    {
        path:"live",
        component:LiveComponent,
         title:"Live Matches |CrickInformer"
    }
];
