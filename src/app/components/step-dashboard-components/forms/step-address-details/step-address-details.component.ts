import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { TraineeAddressDetailsService } from 'src/app/services/trainee-details/trainee-address-details.service';

@Component({
  selector: 'app-step-address-details',
  templateUrl: './step-address-details.component.html',
  styleUrls: ['./step-address-details.component.css']
})
export class StepAddressDetailsComponent implements OnInit {

  traineeId: number = Number(localStorage.getItem('TraineeId'))

  // @ts-ignore
  addressDetails: FormGroup
  errorMessage:string=''
  successMessage: string = ''
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder, private traineeAddressDetailsService: TraineeAddressDetailsService) { }

  ngOnInit(): void {
    this.getAddressDetails()
    this.addressDetails = this.formBuilder.group({
      TraineeId: [this.traineeId, [Validators.required, Validators.pattern('[0-9]+')]],
      State:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      City:['', [Validators.required, Validators.pattern('[a-zA-Z]+')]],
      District:['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      Pincode:['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      Address:['', [Validators.required, Validators.pattern('[a-zA-Z0-9,-/ ]+')]]
    })
  }

  getAddressDetails(): void {
    this.traineeAddressDetailsService.getAddressDetails(1).subscribe((d) => {
      console.log(d)
    })
  }

  saveAddressDetails(): void {
    this.submitted=true;
    this.successMessage = ''
    this.errorMessage = ''
    console.log(this.addressDetails.value)
    if(this.addressDetails.invalid)
      return
    this.traineeAddressDetailsService.postAddressDetails(this.addressDetails.value).subscribe((res) => {
      this.successMessage=res.success;
    }, (err) => {
      this.errorMessage=err.error.error
    })
  }
}
