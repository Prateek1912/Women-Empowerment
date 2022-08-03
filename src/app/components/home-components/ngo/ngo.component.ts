import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Ngo } from 'src/app/models/ngo/ngo';
import { NgoService } from 'src/app/services/ngo/ngo.service';

@Component({
  selector: 'app-ngo',
  templateUrl: './ngo.component.html',
  styleUrls: ['./ngo.component.css']
})
export class NgoComponent implements OnInit {

  // @ts-ignore
  ngoLogin: FormGroup
  // @ts-ignore
  ngoRegister:FormGroup

  loginErrorMessage: string = ''
  ngoRegisterSubmitted: boolean = false
  ngoLoginSubmitted: boolean = false
  registerErrorMessage: string = ''
  registerSuccessMessage: string = ''

  // @ts-ignore
  ngo: Ngo

  constructor(private formBuilder: FormBuilder, private router: Router, private ngoService: NgoService) { }

  ngOnInit(): void {

    if(localStorage.getItem('NgoId') != null) {
      this.router.navigate(['ngo', 'dashboard'])
      return
    }

    // initialize ngo login form
    this.ngoLogin = this.formBuilder.group({
      Username: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })

    // initialize ngoRegister form
    this.ngoRegister = this.formBuilder.group({
      Username: ['',[Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })
  }

  
  login(): void {

    this.ngoLoginSubmitted = true
    this.loginErrorMessage = ''
    if(this.ngoLogin.invalid)
      return

    this.ngoService.login(this.ngoLogin.value).subscribe((res) => {
      console.log(res)
      let data = res.data
      let traineeId = data.ngoId
      let username = data.username

      localStorage.setItem('NgoId', traineeId)
      localStorage.setItem('NgoUsername', username)

      this.router.navigate(['ngo', 'dashboard'])
    }, (err) => {
      this.loginErrorMessage = err.error.error
    })
  }

  register(): void {
    this.ngoRegisterSubmitted = true
    this.registerErrorMessage = ''
    this.registerSuccessMessage = ''

    if(this.ngoRegister.invalid)
      return

    this.ngo = this.ngoRegister.value

    this.ngoService.register(this.ngo).subscribe((res) => {
      this.ngoRegisterSubmitted = false
      this.registerSuccessMessage = res.success
      console.log(res)
    }, (err) => {
      this.ngoRegisterSubmitted = false
      this.registerErrorMessage = err.error.error
    })
  }

}
