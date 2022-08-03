import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgoApplicationService } from 'src/app/services/ngo-details/ngo-application.service';

@Component({
  selector: 'app-ngo-registration',
  templateUrl: './ngo-registration.component.html',
  styleUrls: ['./ngo-registration.component.css']
})
export class NgoRegistrationComponent implements OnInit {

  ngoId: number = Number(localStorage.getItem('NgoId'))
  
  successMessage: string = ''
  errorMessage: string = ''

  constructor(private router: Router, private ngoApplicationService: NgoApplicationService) { }

  ngOnInit(): void {
    this.router.navigate(['ngo', 'registration', 'ngo-organization-details'])
  }
  

  sendApplication(): void {
    this.errorMessage = ''
    this.successMessage = ''
    this.ngoApplicationService.postApplication(this.ngoId).subscribe((res) => {
      this.successMessage = res.success
    }, (err) => {
      this.errorMessage = err.error.error
      // setTimeout(() => {this.router.navigate(['ngo', 'status'])}, 2000)
    })
  }

}
