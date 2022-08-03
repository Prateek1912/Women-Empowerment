import { Component, OnInit } from '@angular/core';
import { AdminNgosService } from 'src/app/services/admin/admin-ngos.service';
import { NgoStatus } from 'src/app/models/admin/ngo-status';

@Component({
  selector: 'app-admin-ngos',
  templateUrl: './admin-ngos.component.html',
  styleUrls: ['./admin-ngos.component.css']
})
export class AdminNgosComponent implements OnInit {

  applications: any[] = []

  activeApplication: any

  successMessage: string = ''
  errorMessage: string = ''
  viewApplicationState: boolean = false
  viewBtnState: boolean = true

  // @ts-ignore
  ngoStatus: NgoStatus

  // @ts-ignore
  applicationId: number

  applicationStatus: number = 3
  approveButton: boolean = true
  rejectButton: boolean = true
  constructor(private adminNgoService: AdminNgosService) { }

  ngOnInit(): void {
    this.fetchApplications()
  }

  convertDateToLocal(date: string) {
    return (new Date(date)).toLocaleDateString().replace(/\//g, '-')
  }

  fetchApplications = (): void => {
    this.applications = []
    this.adminNgoService.getApplications().subscribe((res) => {
      console.log(res)
      let arr = res.data
      for(let i=0; i<arr.length; i++) {

        let application = arr[i].ngoApplications[0]
        if(application) {
          let requestDate = application.requestDate
          if(requestDate) {
            arr[i].ngoApplications[0].requestDate = this.convertDateToLocal(requestDate)
  
            let actionDate = arr[i].ngoApplications[0].actionDate
            if(actionDate) {
              arr[i].ngoApplications[0].actionDate = this.convertDateToLocal(actionDate)
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
    let ngoNewStatus: NgoStatus = {
      NgoApplicationId: this.applicationId,
      Status: 1
    }
    this.ngoStatus = ngoNewStatus
    console.log(this.ngoStatus)
    this.updateApplicationStatus()
  }

  rejectApplication(): void {
    let ngoNewStatus: NgoStatus = {
      NgoApplicationId: this.applicationId,
      Status: 2
    }
    this.ngoStatus = ngoNewStatus
    console.log(this.ngoStatus)
    this.updateApplicationStatus()
  }

  updateApplicationStatus(): void {
    this.successMessage = ''
    this.errorMessage = ''
    this.ngoStatus.NgoApplicationId = this.applicationId

    this.adminNgoService.updateApplicationStatus(this.ngoStatus).subscribe((res) => {
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
