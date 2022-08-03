import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/models/admin/admin';
import { AdminService } from 'src/app/services/admin/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  // @ts-ignore
  adminLogin: FormGroup
  // @ts-ignore
  adminRegister:FormGroup

  loginErrorMessage: string = ''
  adminLoginSubmitted: boolean = false
  adminRegisterSubmitted: boolean = false
  registerErrorMessage: string = ''
  registerSuccessMessage: string = ''

  // @ts-ignore
  admin: Admin

  constructor(private formBuilder: FormBuilder, private router: Router, private adminService: AdminService) { }

  ngOnInit(): void {

    if(localStorage.getItem('AdminId') != null) {
      this.router.navigate(['admin', 'dashboard'])
      return
    }

    // initialize ngo login form
    this.adminLogin = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })

    // initialize stepRegister form
    this.adminRegister = this.formBuilder.group({
      Username: ['', [Validators.required, Validators.pattern('[a-zA-Z0-9]{8,30}')]],
      Password: ['', [Validators.required]]
    })
  }

  login(): void {
    this.adminLoginSubmitted = true
    this.loginErrorMessage = ''
    if(this.adminLogin.invalid)
      return

    this.adminService.login(this.adminLogin.value).subscribe((res) => {
      console.log(res)
      let data = res.data
      let adminId = data.adminId
      let username = data.username

      localStorage.setItem('AdminId', adminId)
      localStorage.setItem('AdminUsername', username)

      this.router.navigate(['admin', 'dashboard'])
    }, (err) => {
      this.loginErrorMessage = err.error.error
    })
  }

  register(): void {
    this.adminRegisterSubmitted = true
    this.registerErrorMessage = ''
    this.registerSuccessMessage = ''

    if(this.adminRegister.invalid)
      return

    this.admin = this.adminRegister.value

    this.adminService.register(this.admin).subscribe((res) => {
      this.adminRegisterSubmitted = false
      this.registerSuccessMessage = res.success
      console.log(res)
    }, (err) => {
      this.adminRegisterSubmitted = false
      this.registerErrorMessage = err.error.error
    })
  }

}
