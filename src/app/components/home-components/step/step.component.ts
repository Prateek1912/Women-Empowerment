import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TraineeService } from 'src/app/services/trainee/trainee.service';
import { Trainee } from 'src/app/models/trainee/trainee';
import { TraineeLogin } from 'src/app/models/trainee/trainee-login';

@Component({
  selector: 'app-step',
  templateUrl: './step.component.html',
  styleUrls: ['./step.component.css']
})
export class StepComponent implements OnInit {

  // @ts-ignore
  stepLogin: FormGroup
  loginErrorMessage: string = ''
  // @ts-ignore
  trainee: Trainee

  // @ts-ignore
  stepRegister: FormGroup
  stepRegisterSubmitted: boolean = false
  registerErrorMessage: string = ''
  registerSuccessMessage: string = ''
  dateOfBirthError: string = ''

  constructor(private router: Router, private formBuilder: FormBuilder, private traineeService: TraineeService) { }

  ngOnInit(): void {

    if(localStorage.getItem('TraineeId') != null) {
      this.router.navigate(['step', 'dashboard'])
      return
    }
    // initialize step login form
    this.stepLogin = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })

    // initialize stepRegister form
    this.stepRegister = this.formBuilder.group({
      FullName: ['', [Validators.required, Validators.pattern('[a-zA-Z ]{3,30}')]],
      Username: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      DateOfBirth: ['', Validators.required],
      Mobile: ['', [Validators.required, Validators.pattern('[789][0-9]{9}')]],
      Password: ['', [Validators.required]],
      ConfirmPassword: ['', [Validators.required]]
    })
  }

  login(): void {

    this.loginErrorMessage = ''
    if(this.stepLogin.invalid)
      return

    this.traineeService.login(this.stepLogin.value).subscribe((res) => {
      console.log(res)
      let data = res.data
      let fullName = data.fullName
      let traineeId = data.traineeId
      let username = data.username

      localStorage.setItem('TraineeId', traineeId)
      localStorage.setItem('TraineeFullName', fullName)
      localStorage.setItem('TraineeUsername', username)

      this.router.navigate(['step', 'dashboard'])
    }, (err) => {
      this.loginErrorMessage = err.error.error
    })
  }

  register(): void {
    this.dateOfBirthError = ''
    this.stepRegisterSubmitted = true
    this.registerErrorMessage = ''
    this.registerSuccessMessage = ''

    if(this.stepRegister.invalid)
      return

    this.trainee = this.stepRegister.value

    this.traineeService.register(this.trainee).subscribe((res) => {
      this.stepRegisterSubmitted = false
      this.registerSuccessMessage = res.success
      console.log(res)
    }, (err) => {
      console.log(err)
      console.log(err.error)
      console.log(err.error.errors)
      if(err.error.errors) {
        console.log(err.error.errors)
        this.dateOfBirthError = err.error.errors.DateOfBirth[0]
        console.log(this.dateOfBirthError)
      }
      this.stepRegisterSubmitted = false
      this.registerErrorMessage = err.error.error
    })
  }

}
