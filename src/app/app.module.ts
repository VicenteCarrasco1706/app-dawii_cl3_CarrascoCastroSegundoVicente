import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-material/material/material.module';
import { HomeComponent } from './dashboard/home/home.component';
import { AlmacenComponent } from './dashboard/almacen/almacen.component';
import { ObreroComponent } from './dashboard/obrero/obrero.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ObreroDetalleComponent } from './dashboard/obrero/obrero-detalle/obrero-detalle.component';
import { ObreroListaComponent } from './dashboard/obrero/obrero-lista/obrero-lista.component';
import { LoginComponent } from './auth/login/login.component';
import { RouterModule } from '@angular/router';
import { AlmacenDetalleComponent } from './dashboard/almacen/almacen-detalle/almacen-detalle.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlmacenComponent,
    ObreroComponent,
    DashboardComponent,
    PageNotFoundComponent,
    ObreroDetalleComponent,
    ObreroListaComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'login', component: LoginComponent},
      {path: 'dashboard', component: DashboardComponent,
      children: [
        {path: 'home', component: HomeComponent},
        {path: 'almacen', component: AlmacenListaComponent},
        {path: 'almacen/:id', component: AlmacenDetalleComponent},
        {path: 'obrero', component: ObreroListaComponent},
        {path: 'obrero/:id', component: ObreroDetalleComponent},
      ]
    },
    {path: '', redirectTo: 'login', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
