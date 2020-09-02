import { Component, OnInit, ViewChild, TemplateRef, ChangeDetectorRef } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { MedicineService } from '../services/medicine.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-edit-medicine',
  templateUrl: './editmedicine.component.html',
  styleUrls: ['./editmedicine.component.scss'],
  providers : [DatePipe]
})
export class EditMedicineComponent implements OnInit {

  medicine: any;

  formSubmitted = false;
  editForm : FormGroup;

  constructor(private fb: FormBuilder,
    private route: ActivatedRoute,
    private cd: ChangeDetectorRef,
    private router: Router,
    private medService : MedicineService,
    private date : DatePipe
    ) { 
      
      this.editForm = this.fb.group({
        name : ['',Validators.required],
        brand:['',Validators.required],
        price : ['',Validators.required],
        quantity : ['',Validators.required],
        notes : ['',Validators.required],
        expiryDate : ['',Validators.required]
      });

    }


  ngOnInit() {
    this.medService.get(this.medService.editMedId).subscribe(s => {
      this.medicine = s;
      this.medicine.expiryDate = this.date.transform(this.medicine.expiryDate, 'MM/dd/yyyy');
      this.editForm.patchValue(this.medicine);
    });
    
  }

  ngOnDestroy(){
  }

  goHome(){
    this.router.navigate(['/landing']);
  }

  submit(){
    const med = {...this.editForm.value,
    id : this.medicine.id,
    expiryDate : new Date(this.medicine.expiryDate)};

    this.medService.editMedicine(med).subscribe(s => {
      this.router.navigate(['/landing']);
    });    
    }
  }
