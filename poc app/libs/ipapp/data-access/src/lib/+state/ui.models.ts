/* eslint-disable @typescript-eslint/no-unused-vars */
// export interface IPatientRecord {
//     "Title": string,   
//     "FirstName": string,
//     "LastName": string,
//     "BirthDate": string,
//     "Age": string,
//     "Active": string,
//     "id": number
//   }

  export interface IPatientRecord {
    "Title": string,
    "FirstName": string,
    "LastName": string,
    "BirthDate": Date,
    "Age": number,
    "Active": boolean,
    "ID"?: number
  }
  //   constructor(
  //     Title?: string,
  //     FirstName?: string,
  //     LastName?: string,
  //     BirthDate?: Date,
  //     Age?: number,
  //     Active?: boolean,
  //   ) {
  //     this.Title = Title || '';
  //     this.FirstName = FirstName || '';
  //     this.LastName = LastName || '';
  //     this.BirthDate = BirthDate || new Date();
  //     this.Age = Age || 0;
  //     this.Active = true;
  //   }
  // }

  

