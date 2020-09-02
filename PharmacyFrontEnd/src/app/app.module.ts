import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule, FlexModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule, MatCardModule, MatIconModule, MatMenuModule, MatButtonModule, MatListModule, MatPaginatorModule, MatSortModule, MatDialogModule } from '@angular/material';
import { MedicineService } from './services/medicine.service';
import { HttpClientModule } from '@angular/common/http';
import { ExploreMedicinesComponent } from './exploremedicines/exploremedicines.component';
import { EditMedicineComponent } from './editmedicine/editmedicine.component';

import { SnackbarComponent } from './shared/snackbar/snackbar.component';
import { TablecardComponent } from './shared/tablecard/tablecard.component';
import { NotFoundComponent } from './Error/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    ExploreMedicinesComponent,
    TablecardComponent,
    SnackbarComponent,
    NotFoundComponent,
    EditMedicineComponent
  ],
  imports: [
    AppRoutingModule,
    AngularMaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule,
    MatIconModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatCardModule,
    MatButtonModule,
    MatDialogModule
  ],
  exports:[
  ],
  providers: [MedicineService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
