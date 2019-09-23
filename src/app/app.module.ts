// Imports internos
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { FormsModule }   from '@angular/forms'; // [*Form] Necessario para utilizar os Forms HTML

// [*SPA] Componentes da aplicacao
import { HomeComponent } from './home/home.component';
import { NiversComponent, NiverComponentItem } from './nivers/nivers.component';
import { HooksComponent } from './hooks/hooks.component';

// [*Router] Componentes do roteamento
import { Routes, RouterModule } from '@angular/router';
import { ModuleWithProviders } from '@angular/compiler/src/core';
const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hooks', component: HooksComponent },
  { path: 'nivers', component: NiversComponent }
];
export const routing: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);

// [*Material_UI]
import { MatButtonModule, MatButtonToggleModule, MatIconModule, 
         MatTooltipModule, MatMenuModule, MatFormFieldModule,
         MatToolbarModule, MatInputModule, MatSlideToggleModule } from '@angular/material';
const MaterialElements = [
  MatButtonModule, MatButtonToggleModule, MatIconModule,
  MatTooltipModule, MatMenuModule, MatFormFieldModule,
  MatToolbarModule, MatInputModule, MatSlideToggleModule
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HooksComponent,
    NiversComponent,
    NiverComponentItem
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialElements,
    FormsModule,
    routing //[*Router: Vital para o roteamento]
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
