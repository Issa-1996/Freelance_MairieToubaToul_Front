import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrModule } from "ngx-toastr";

import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FixedPluginModule} from './shared/fixedplugin/fixedplugin.module';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routing';

import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { MaterialModule } from "./Material/matmodule.service";
import { BrowserModule } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { MatButtonModule } from "@angular/material/button";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatSelectModule } from "@angular/material/select";
import { MatTooltipModule } from "@angular/material/tooltip";
import { HttpClientModule } from "@angular/common/http";
import { ConnexionComponent } from './connexion/connexion.component';
import { ContainerComponent } from './container/container.component';
import { MenuComponent } from './pages/menu/menu.component';
import { GestionNaissanceComponent } from "./pages/NAISSANCES/gestion-naissance/gestion-naissance.component";
import { AjoutNaissanceComponent } from "./pages/NAISSANCES/ajout-naissance/ajout-naissance.component";
import { ModifierNaissanceComponent } from "./pages/NAISSANCES/modifier-naissance/modifier-naissance.component";
import { DetailNaissanceComponent } from "./pages/NAISSANCES/detail-naissance/detail-naissance.component";
import { GestionDecesComponent } from "./pages/DECES/gestion-deces/gestion-deces.component";
import { DetailDecesComponent } from "./pages/DECES/detail-deces/detail-deces.component";
import { NouveauDecesComponent } from "./pages/DECES/nouveau-deces/nouveau-deces.component";
import { NouveauMariageComponent } from "./pages/MARIAGES/nouveau-mariage/nouveau-mariage.component";
import { DetailMariageComponent } from "./pages/MARIAGES/detail-mariage/detail-mariage.component";
import { ModifierMariageComponent } from "./pages/MARIAGES/modifier-mariage/modifier-mariage.component";
import { GestionMariageComponent } from "./pages/MARIAGES/gestion-mariage/gestion-mariage.component";
import { GestionCertificatComponent } from "./pages/AUTRES/gestion-certificat/gestion-certificat.component";
import { DetailCertificatComponent } from "./pages/AUTRES/detail-certificat/detail-certificat.component";
import { ModifierCertificatComponent } from "./pages/AUTRES/modifier-certificat/modifier-certificat.component";
import { NouveauCertificatComponent } from "./pages/AUTRES/nouveau-certificat/nouveau-certificat.component";


@NgModule({
  declarations: [
    AppComponent,
    AdminLayoutComponent,
    GestionNaissanceComponent,
    GestionCertificatComponent,
    GestionDecesComponent,
    AjoutNaissanceComponent,
    ModifierNaissanceComponent,
    DetailNaissanceComponent,
    DetailCertificatComponent,
    ModifierCertificatComponent,
    DetailDecesComponent,
    NouveauCertificatComponent,
    NouveauDecesComponent,
    NouveauMariageComponent,
    DetailMariageComponent,
    ModifierMariageComponent,
    GestionMariageComponent,
    ConnexionComponent,
    ContainerComponent,
    MenuComponent
  ],
  imports: [
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes,{
      useHash: true
    }),
    SidebarModule,
    NavbarModule,
    ToastrModule.forRoot(),
    FooterModule,
    FixedPluginModule,
    MaterialModule,
    BrowserModule,
    CommonModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
