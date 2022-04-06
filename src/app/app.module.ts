import { Component, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ProjetsComponent } from './projets/projets.component';
import { QuiSuisJeComponent } from './qui-suis-je/qui-suis-je.component';
import { YouloopComponent } from './youloop/youloop.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { TransportComponent } from './transport/transport.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { Erreur404Component } from './erreur404/erreur404.component';

const routes: Routes = [
  { path: 'projets', component: ProjetsComponent},
  { path: 'quiSuisJe', component: QuiSuisJeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'youloop', component: YouloopComponent},
  { path: 'contact', component: ContactComponent},
  { path: 'transport', component: TransportComponent},
  { path: '', component: HomeComponent},
  { path: '**', component: Erreur404Component}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProjetsComponent,
    QuiSuisJeComponent,
    YouloopComponent,
    MaintenanceComponent,
    ContactComponent,
    TransportComponent,
    DashboardComponent,
    Erreur404Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
