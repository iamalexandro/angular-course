import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FechaActualComponent } from './fecha-actual/fecha-actual.component';
import { CopyrightComponent } from './copyright/copyright.component';
import { ViewmodelComponent } from './viewmodel/viewmodel.component';
import { EjmetodoComponent } from './ejmetodo/ejmetodo.component';
import { EjpropertybidingComponent } from './ejpropertybiding/ejpropertybiding.component';
import { EjeventbidingComponent } from './ejeventbiding/ejeventbiding.component';
import { Ej2waybidingComponent } from './ej2waybiding/ej2waybiding.component';

@NgModule({
  declarations: [
    AppComponent,
    FechaActualComponent,
    CopyrightComponent,
    ViewmodelComponent,
    EjmetodoComponent,
    EjpropertybidingComponent,
    EjeventbidingComponent,
    Ej2waybidingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
