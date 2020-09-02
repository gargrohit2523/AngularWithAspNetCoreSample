import { Component, OnInit, ChangeDetectionStrategy, Input, Output, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatSort, MatTable } from '@angular/material';
import { EventEmitter } from 'events';
import { TableColumn } from '../../models/table-column.model';
import { MedicineService } from 'src/app/services/medicine.service';

@Component({
  selector: 'app-tablecard',
  templateUrl: './tablecard.component.html',
  styleUrls: ['./tablecard.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})


export class TablecardComponent implements OnInit {
  
  _MS_PER_DAY = 1000 * 60 * 60 * 24;
  @Input() set tableSource(value:any){
    if(value instanceof MatTableDataSource){
      this.dataSource = value;
    }
    else{
      this.dataSource = new MatTableDataSource(value);
    }

    setTimeout(() => this.matTable.updateStickyColumnStyles());
  }

  @Input() columns: TableColumn[] = [];
  @Input() showLoader : boolean;
  @Input() minWidth : 0;

  @Output() rowClick = new EventEmitter();

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) matTable: MatTable<any>;

  dataSource: any;

  constructor(private medSrvice: MedicineService) { }

  ngOnInit(): void {
    this.medSrvice.medicinesChanged.subscribe(s=>
      {
        this.dataSource.filter = s.trim().toLowerCase();
      });
  }

  get displayedColumns(){
    return (this.columns || []).filter(column => !column.hide).map(column => column.propName);
  }

  onRowClick(row){
    this.rowClick.emit(row);
  }

  dateDiffInDays(a, b) {
    // Discard the time and time-zone information.
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());
  
    return Math.floor((utc2 - utc1) / this._MS_PER_DAY);
  }

  checkExpiry(expDate){
    let today = new Date();
    let exp = new Date(expDate);
    if(this.dateDiffInDays(today,exp) < 30){
      return true;
    }

    return false;
  }

}
