import { Component, OnInit } from '@angular/core';
import { AdminTraineesService } from 'src/app/services/admin/admin-trainees.service';
import { TraineeStatus } from 'src/app/models/admin/trainee-status';

@Component({
  selector: 'app-admin-trainees',
  templateUrl: './admin-trainees.component.html',
  styleUrls: ['./admin-trainees.component.css']
})
export class AdminTraineesComponent implements OnInit {
  applications: any[] = []

  activeApplication: any

  successMessage: string = ''
  errorMessage: string = ''
  viewApplicationState: boolean = false
  viewBtnState: boolean = true

  // @ts-ignore
  traineeStatus: TraineeStatus

  // @ts-ignore
  applicationId: number

  applicationStatus: number = 3
  approveButton: boolean = true
  rejectButton: boolean = true
  constructor(private adminTraineeService: AdminTraineesService) { }

  ngOnInit(): void {
    this.fetchApplications()
  }

  convertDateToLocal(date: string) {
    return (new Date(date)).toLocaleDateString().replace(/\//g, '-')
  }

  fetchApplications = (): void => {
    this.applications = []
    this.adminTraineeService.getApplications().subscribe((res) => {
      console.log(res)
      let arr = res.data
      for(let i=0; i<arr.length; i++) {
        
        let application = arr[i].traineeApplications[0]
        if(application) {
          let requestDate = application.requestDate
          if(requestDate) {
            arr[i].traineeApplications[0].requestDate = this.convertDateToLocal(requestDate)
  
            let actionDate = arr[i].traineeApplications[0].actionDate
            if(actionDate) {
              arr[i].traineeApplications[0].actionDate = this.convertDateToLocal(actionDate)
            }
            this.applications.push(arr[i])
        }
        
      }
        
      }
    }, (err) => {
      console.log(err.error.error)
    })
  }


  onRadioChange = (applicationId: number, status: number, activeApplication: any) => {
    this.viewBtnState = false
    this.activeApplication = activeApplication
    this.applicationId = applicationId
    this.applicationStatus = status
    this.approveButton = false
    this.rejectButton = false
    this.applicationId = applicationId

    console.log(this.applicationId, this.applicationStatus)
  }

  approveApplication(): void {
    let traineeNewStatus: TraineeStatus = {
      TraineeApplicationId: this.applicationId,
      Status: 1
    }
    this.traineeStatus = traineeNewStatus
    console.log(this.traineeStatus)
    this.updateApplicationStatus()
  }

  rejectApplication(): void {
    let traineeNewStatus: TraineeStatus = {
      TraineeApplicationId: this.applicationId,
      Status: 2
    }
    this.traineeStatus = traineeNewStatus
    console.log(this.traineeStatus)
    this.updateApplicationStatus()
  }

  updateApplicationStatus(): void {
    this.successMessage = ''
    this.errorMessage = ''
    this.traineeStatus.TraineeApplicationId = this.applicationId

    this.adminTraineeService.updateApplicationStatus(this.traineeStatus).subscribe((res) => {
      this.successMessage = res.success
      this.fetchApplications()
      this.viewBtnState = true
      this.applicationStatus = 3
    }, (err) => {
      this.errorMessage = err.error.error
    })
  }

  viewApplication(): void {
    this.viewApplicationState = true
  }

  closeApplication = (): void => {
    this.viewApplicationState = false
  }
}
