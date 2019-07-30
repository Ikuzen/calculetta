import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//material design modules
import {MatGridListModule,MatToolbarModule, MatButtonModule, MatIconModule, MatListModule, MatDialogModule, MatInputModule } from '@angular/material';
import {LayoutModule} from '@angular/cdk/layout'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { CalculatorViewerComponent } from './calculator-viewer/calculator-viewer.component';
import { Buttons } from './buttons';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorViewerComponent,

  ],
  imports: [
    BrowserModule,
    LayoutModule,
    MatGridListModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,

  ],
  providers: [Buttons],
  bootstrap: [AppComponent]

})
export class AppModule { }
