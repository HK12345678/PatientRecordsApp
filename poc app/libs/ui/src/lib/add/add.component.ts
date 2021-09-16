/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable no-debugger */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @typescript-eslint/no-empty-function */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { IPatientRecord, UIActions, UISelector } from '@papp/ipapp/data-access';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'papp-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})

export class AddComponent implements OnInit {
  errorMessage = undefined;
  PatientRecordRetrieved$ = this.store.select(UISelector.getPatientRecordByID);

  //PatientRecordRetrieved = {} as IPatientRecord;
  Form!: FormGroup;
  private id: number;
  private isButtonVisible = true;

  constructor(private fb: FormBuilder, private route: Router, private store: Store, private routed: ActivatedRoute,
    public alertController: AlertController)
  {
    this.id = Number(this.routed.snapshot.paramMap.get('id'));
  }
  
  back()
  {
    this.route.navigate(['list']);
  }

  buttonClick(){}

  Delete()
  {
    this.alertController.create({
      header: 'Confirm Alert',
      subHeader: 'Confirm',
      message: 'Are you sure you want to Delete the Record?',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.store.dispatch(new UIActions.DeletePatientRecord(Number(this.routed.snapshot.paramMap.get('id'))));
            this.route.navigate(['list']);

            this.alertController.create({
              header: 'Deleted',
              subHeader: '',
              message: 'Record deleted...',
              buttons: ['OK']
            }).then(res => {
        
              res.present();
        
            });
          }
        },
        {
          text: 'No',
          handler: () => {
          }
        },
      ]
    }).then(res => {
      res.present();
    });
  }

  Save()
  {

        if (this.Form.invalid) {
          alert('Please verify all input values are proper.');
            return;
        }

    const newRecord: IPatientRecord = {
      Title: this.Form.get("Title")!.value,
      FirstName: this.Form.get("FirstName")!.value,
      LastName: this.Form.get("LastName")!.value,
      BirthDate: this.Form.get("BirthDate")!.value,
      Age: this.Form.get("Age")!.value,
      Active: this.Form.get("Active")!.value,
      ID: this.id};

      if (this.id > 0)
    {
      //debugger;
      this.store.dispatch(new UIActions.EditPatientRecord(newRecord));

      this.alertController.create({
        header: 'Updated',
        subHeader: '',
        message: 'Record updated...',
        buttons: ['OK']
      }).then(res => {
  
        res.present();
  
      });
    }
    else
    {
        this.isButtonVisible = false;
        this.store.dispatch(new UIActions.AddPatientRecord(newRecord));

        this.alertController.create({
          header: 'Saved',
          subHeader: '',
          message: 'Record Added...',
          buttons: ['OK']
        }).then(res => {
    
          res.present();
    
        });
    } 
    

    this.route.navigate(['list']);
  }
  
  ngOnInit(): void {

    

    this.Form = this.fb.group({
      Title: ["", Validators.required],
      FirstName: ["", Validators.required],
      LastName: ["", Validators.required],
      BirthDate: ["", Validators.required],
      Age: ["", Validators.required, Validators.maxLength(3)],
      //Active: ["", Validators.required],
      Active: []
    })
// debugger;
    this.Form.reset();  

    if (this.id > 0)
    {
      // debugger;
      this.store.dispatch(new UIActions.LoadPatientRecordByID(this.id));

      // this.store.pipe(select(UISelector.getPatientRecordByID)).subscribe(
    //   patientRecords => 
    //   {
    //     this.PatientRecordRetrieved = patientRecords;
    //   }
    // )

    this.PatientRecordRetrieved$.subscribe(PatientRec => {
      if (PatientRec) {
        this.Form.patchValue({
          Title: PatientRec.Title,
          FirstName: PatientRec.FirstName,
          LastName: PatientRec.LastName,
          BirthDate: PatientRec.BirthDate,
          Age: PatientRec.Age,
          Active: PatientRec.Active,
        });
      }
    })
    }
    
}
}