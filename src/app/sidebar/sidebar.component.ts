import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    // { path: '/container/dashboard',     title: 'TABLEAU DE BORD',   icon:'nc-bank',       class: '' },
    { path: '/container/client',        title: 'REGISTRE NAISSANCE',   icon:'nc-badge',  class: '' },
    { path: '/container/depense',       title: 'REGISTRE DECES',  icon:'nc-ambulance', class: '' },
    { path: '/container/model',         title: 'REGISTRE MARIAGE',icon:'nc-favourite-28', class: '' },
    { path: '/container/commande',      title: 'CERTIFICAT', icon:'nc-align-center',class: '' },
    // { path: '/container/icons',         title: 'Icons',             icon:'nc-diamond',    class: '' },
    // { path: '/maps',          title: 'Maps',              icon:'nc-pin-3',      class: '' },
    // { path: '/notifications', title: 'Notifications',     icon:'nc-bell-55',    class: '' },
    // { path: '/user',          title: 'User Profile',      icon:'nc-single-02',  class: '' },
    // { path: '/table',         title: 'Table List',        icon:'nc-tile-56',    class: '' },
    // { path: '/typography',    title: 'Typography',        icon:'nc-caps-small', class: '' },
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
