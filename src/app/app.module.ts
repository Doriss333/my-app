import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FormularioComponent } from './pages/formulario/formulario.component';
import { HomeComponent } from './pages/home/home.component';
import { EventosComponent } from './pages/eventos/eventos.component';
import { CalendarioEventosComponent } from './pages/calendario-eventos/calendario-eventos.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component'; 
import { QuieneSomosComponent } from './pages/quiene-somos/quiene-somos.component';
/*import { HttpClientModule } from '@angular/common/http';*/
import { RegisterComponent } from './registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent, 
    FormularioComponent,
    FooterComponent,
    HomeComponent,
    EventosComponent,
    CalendarioEventosComponent,
    LoginComponent,
    QuieneSomosComponent,
    /*HttpClientModule*/
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
