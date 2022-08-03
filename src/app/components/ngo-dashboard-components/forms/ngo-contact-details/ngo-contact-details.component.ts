import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgoContactDetailsService } from 'src/app/services/ngo-details/ngo-contact-details.service';

@Component({
  selector: 'app-ngo-contact-details',
  templateUrl: './ngo-contact-details.component.html',
  styleUrls: ['./ngo-contact-details.component.css']
})
export class NgoContactDetailsComponent implements OnInit {

  ngoId: number = Number(localStorage.getItem('NgoId'))

  // @ts-ignore
  contactDetails: FormGroup
  errorMessage:string=''
  successMessage: string = ''
  submitted: boolean = false

  constructor(private formBuilder: FormBuilder, private ngoContactDetailsService: NgoContactDetailsService) { }

  ngOnInit(): void {
    this.contactDetails = this.formBuilder.group({
      NgoId: [this.ngoId, [Validators.required]],
      State:['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      City:['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      District:['', [Validators.required, Validators.pattern('[a-zA-Z ]+')]],
      Pin:['', [Validators.required, Validators.pattern('[0-9]{6}')]],
      Address:['', [Validators.required, Validators.pattern('[a-zA-Z0-9,-/ ]+')]],
      ContactNo: ['', [Validators.required, Validators.pattern('[0-9]{10}')]]
    })
  }

  getContactDetails(): void {
    this.ngoContactDetailsService.getContactDetails(this.ngoId).subscribe((d) => {
      console.log(d)
    })
  }

  saveContactDetails(): void {
    this.submitted=true;
    this.successMessage = ''
    this.errorMessage = ''
    console.log(this.contactDetails.value)
    if(this.contactDetails.invalid)
      return
    this.ngoContactDetailsService.postContactDetails(this.contactDetails.value).subscribe((res) => {
      this.successMessage=res.success;
    }, (err) => {
      console.log('eror')
      console.log(err)
      this.errorMessage=err.error.error
    })
  }
}
