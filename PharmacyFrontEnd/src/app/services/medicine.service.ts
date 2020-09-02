import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of, empty, Subject } from 'rxjs';
import { MatTableDataSource } from '@angular/material';
import { EventEmitter } from 'events';
import { HttpClient } from '@angular/common/http';
import { Medicine } from '../models/Medicine';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  private readonly apiUrl = environment.apiUrl;
  private readonly medicineUrl= this.apiUrl + '/api/Medicine';

  editMedId : any;


  public medicinesChanged = new Subject<any>();

  constructor(private http: HttpClient) { }

  getAllMedicines(param: any) : Observable<any> {
    let url = `${this.medicineUrl}/all`;
    if(param){
      url += `/${param}`;
    }

    return this.http.get(url);
  }

  get(param: any) : Observable<any> {

    let url = `${this.medicineUrl}/${param}`;
    return this.http.get(url);
  }

  editMedicine(value){
    return this.http.put(`${this.medicineUrl}`, value);
  }
}
