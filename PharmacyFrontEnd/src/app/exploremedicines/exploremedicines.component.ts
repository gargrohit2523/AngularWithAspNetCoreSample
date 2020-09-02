import { Component, OnInit, ViewChild, TemplateRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MatDialog } from '@angular/material';
import { MedicineService } from '../services/medicine.service';
import { TableColumn } from '../models/table-column.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-explore-medicines',
  templateUrl: './exploremedicines.component.html',
  styleUrls: ['./exploremedicines.component.scss']
})
export class ExploreMedicinesComponent implements OnInit {

  @ViewChild('edit', {static : true}) editMedicine: TemplateRef<any>;

  data: Observable<any[]>;
  columns: TableColumn[];
  private alive = new Subject();
  isLoading = false; 

  constructor(private dialog : MatDialog, private medService: MedicineService,
    private router: Router) { }

  ngOnInit() {

    this.columns=[
      {
        displayName: 'Name',
        propName: 'name',
        cellClass: 'text-left weight-normal',
        headerClass:'text-left weight-normal',
        width : '100px'
      },
      {
        displayName: 'Brand',
        propName: 'brand',
        cellClass: 'text-left weight-normal',
        headerClass:'text-left weight-normal'
      },
      {
        displayName: 'Price',
        propName: 'price',
        cellClass: 'text-left weight-normal',
        headerClass:'text-left weight-normal'
      },
      {
        displayName: 'Quantity',
        propName: 'quantity',
        cellClass: 'text-left weight-normal',
        headerClass:'text-left weight-normal',
        width : '50px'
      },
      {
        displayName: 'Expiry Date',
        propName: 'expiryDate',
        cellClass: 'text-left weight-normal',
        headerClass:'text-left weight-normal'
      },
      {
        displayName: '',
        propName: 'btn2',
        template: this.editMedicine,
        cellClass: 'text-left',
        width : '50px',
        maxWidth: '50px'
      }
    ]

    this.refresh('');
  }

  ngOnDestroy(){
    this.alive.next();
  }

  refresh(input: any){
    this.medService.getAllMedicines(input).subscribe(res => this.data = res);
  }

  AddMedicine(){

  }

  EditMedicine(row){
    this.medService.editMedId = row.id;
    this.router.navigate(['/editmedicine']);
  }

  search(input){
    this.medService.medicinesChanged.next(input);
  }

}
