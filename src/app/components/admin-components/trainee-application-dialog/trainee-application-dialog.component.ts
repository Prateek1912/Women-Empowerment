import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'trainee-application-dialog',
  templateUrl: './trainee-application-dialog.component.html',
  styleUrls: ['./trainee-application-dialog.component.css']
})
export class TraineeApplicationDialogComponent implements OnInit {
  
  @Input() application: any

  // @ts-ignore
  @Input() closeApplication: () => void
  
  constructor() { }

  ngOnInit(): void {
  }
}
