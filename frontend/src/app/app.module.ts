import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InformacionComponent } from './components/informacion/informacion.component';
import { MenuComponent } from './components/menu/menu.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ReporteComponent } from './components/reporte/reporte.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImpuestoComponent } from './components/impuesto/impuesto.component';
import { Routes, RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { GastoService } from './services/gasto.service';
import { RegistroComponent } from './components/registro/registro.component';
import { LoginComponent } from './components/login/login.component';

const rutas: Routes = [
  { path: 'informacion', component: InformacionComponent },
  { path: 'formulario', component: FormularioComponent },
  { path: 'gastos', component: ImpuestoComponent },
  { path: 'reporte', component: ReporteComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    InformacionComponent,
    MenuComponent,
    FormularioComponent,
    ReporteComponent,
    ImpuestoComponent,
    RegistroComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(rutas),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    GastoService
  ],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule {}
