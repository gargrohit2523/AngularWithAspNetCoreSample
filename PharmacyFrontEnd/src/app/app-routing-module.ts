import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { ExploreMedicinesComponent } from './exploremedicines/exploremedicines.component';
import { NotFoundComponent } from './Error/not-found/not-found.component';
import { EditMedicineComponent } from './editmedicine/editmedicine.component';


const routes: Routes = [
    {path: '', pathMatch:'full', redirectTo: 'landing'},
    {path:'landing', component : ExploreMedicinesComponent},
    {path:'editmedicine', component : EditMedicineComponent},
    {path:'**', pathMatch:'full', component : NotFoundComponent}
]

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {useHash : true})
    ],
    exports:[RouterModule],
    providers : []
})


export class AppRoutingModule{}