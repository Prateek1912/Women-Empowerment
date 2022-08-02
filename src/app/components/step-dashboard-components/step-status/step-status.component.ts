import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TraineeApplicationService } from 'src/app/services/trainee-details/trainee-application.service';

@Component({
  selector: 'app-step-status',
  templateUrl: './step-status.component.html',
  styleUrls: ['./step-status.component.css']
})
export class StepStatusComponent implements OnInit {

  traineeId: number = Number(localStorage.getItem('TraineeId'))

  errorMessage:string = ''
  applicationStatus: any = null

  constructor(private router: Router, private traineeApplicationService: TraineeApplicationService) { }

  ngOnInit(): void {
    this.getApplicationStatus()
  }

  getApplicationStatus(): void {
    this.traineeApplicationService.getApplication(this.traineeId).subscribe((res) => {
      this.applicationStatus = res.data
      this.applicationStatus.requestDate = (new Date(res.data.requestDate)).toLocaleDateString().replace (/\//g, '-')

      if(this.applicationStatus.actionDate) {
        this.applicationStatus.actionDate = (new Date(res.data.actionDate)).toLocaleDateString().replace (/\//g, '-')
      }

    }, (err) => {
      this.errorMessage = err.error.error
    })
  }
  
}
