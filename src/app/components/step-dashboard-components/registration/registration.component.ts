import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';
import { TraineeApplicationService } from 'src/app/services/trainee-details/trainee-application.service';

@Component({
  selector: 'step-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  traineeId: number = Number(localStorage.getItem('TraineeId'))
  
  successMessage: string = ''
  errorMessage: string = ''

  constructor(private router: Router, private traineeApplicationService: TraineeApplicationService) { }

  ngOnInit(): void {
    this.router.navigate(['step', 'registration', 'trainee-personal-details'])
  }

  sendApplication(): void {
    this.errorMessage = ''
    this.successMessage = ''
    this.traineeApplicationService.postApplication(this.traineeId).subscribe((res) => {
      this.successMessage = res.success
    }, (err) => {
      this.errorMessage = err.error.error
      // setTimeout(() => {this.router.navigate(['step', 'status'])}, 2000)
    })
  }

}
