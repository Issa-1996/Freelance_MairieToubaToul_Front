import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { NotificationsComponent } from '../../pages/notifications/notifications.component';
import { UpgradeComponent } from '../../pages/upgrade/upgrade.component';
import { ConnexionComponent } from 'app/connexion/connexion.component';
import { GestionNaissanceComponent } from 'app/pages/NAISSANCES/gestion-naissance/gestion-naissance.component';
import { GestionDecesComponent } from 'app/pages/DECES/gestion-deces/gestion-deces.component';
import { GestionMariageComponent } from 'app/pages/MARIAGES/gestion-mariage/gestion-mariage.component';
import { GestionCertificatComponent } from 'app/pages/AUTRES/gestion-certificat/gestion-certificat.component';

export const AdminLayoutRoutes: Routes = [
    { path: 'client',         component: GestionNaissanceComponent },
    // { path: 'dashboard',      component: DashboardComponent },
    // { path: 'user',           component: UserComponent },
    // { path: 'table',          component: TableComponent },
    // { path: 'typography',     component: TypographyComponent },
    { path: 'icons',          component: IconsComponent },
    // { path: 'maps',           component: MapsComponent },
    // { path: 'notifications',  component: NotificationsComponent },
    // { path: 'upgrade',        component: UpgradeComponent },
    { path: 'commande',       component: GestionCertificatComponent},
    { path: 'depense',       component: GestionDecesComponent},
    { path: 'model',       component: GestionMariageComponent},
];
