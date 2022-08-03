import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookieService } from 'ngx-cookie-service';
import {MatRadioModule} from '@angular/material/radio';

// Components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { StepDashboardComponent } from './components/step-dashboard/step-dashboard.component';
import { NgoDashboardComponent } from './components/ngo-dashboard/ngo-dashboard.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { StepComponent } from './components/home-components/step/step.component';
import { LegislationAndPolicyComponent } from './components/home-components/legislation-and-policy/legislation-and-policy.component';
import { NgoComponent } from './components/home-components/ngo/ngo.component';
import { AdminComponent } from './components/home-components/admin/admin.component';
import { FaqComponent } from './components/home-components/faq/faq.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { RegistrationComponent } from './components/step-dashboard-components/registration/registration.component';
import { NgosComponent } from './components/step-dashboard-components/ngos/ngos.component';
import { GuidelinesComponent } from './components/step-dashboard-components/guidelines/guidelines.component';
import { TrainingSectorsComponent } from './components/step-dashboard-components/training-sectors/training-sectors.component';
import { HomeContentComponent } from './components/home-components/home-content/home-content.component';
import { FooterComponent } from './components/home-components/footer/footer.component';
import { StepNavigationMenuComponent } from './components/step-dashboard-components/step-navigation-menu/step-navigation-menu.component';
import { StepDashboardContentHeaderComponent } from './components/step-dashboard-components/step-dashboard-content-header/step-dashboard-content-header.component';
import { StepFaqComponent } from './components/step-dashboard-components/step-faq/step-faq.component';
import { StepStatusComponent } from './components/step-dashboard-components/step-status/step-status.component';
import { StepDashboardMainComponent } from './components/step-dashboard-components/step-dashboard-main/step-dashboard-main.component';
import { StepPersonalDetailsComponent } from './components/step-dashboard-components/forms/step-personal-details/step-personal-details.component';
import { StepFamilyDetailsComponent } from './components/step-dashboard-components/forms/step-family-details/step-family-details.component';
import { StepAddressDetailsComponent } from './components/step-dashboard-components/forms/step-address-details/step-address-details.component';
import { CriteriaComponent } from './components/ngo-dashboard-components/criteria/criteria.component';
import { OrganizationsComponent } from './components/ngo-dashboard-components/organizations/organizations.component';
import { FundingNormsComponent } from './components/ngo-dashboard-components/funding-norms/funding-norms.component';
import { AdminNgosComponent } from './components/admin-components/admin-ngos/admin-ngos.component';
import { AdminTraineesComponent } from './components/admin-components/admin-trainees/admin-trainees.component';
import { AdminCoursesComponent } from './components/admin-components/admin-courses/admin-courses.component';
import { NgosFaqComponent } from './components/ngo-dashboard-components/ngos-faq/ngos-faq.component';
import { NgoStatusComponent } from './components/ngo-dashboard-components/ngo-status/ngo-status.component';
import { NgoNavigationMenuComponent } from './components/ngo-dashboard-components/ngo-navigation-menu/ngo-navigation-menu.component';
import { NgoDashboardMainComponent } from './components/ngo-dashboard-components/ngo-dashboard-main/ngo-dashboard-main.component';
import { AdminDashboardMainComponent } from './components/admin-components/admin-dashboard-main/admin-dashboard-main.component';
import { AdminNavigationMenuComponent } from './components/admin-components/admin-navigation-menu/admin-navigation-menu.component';
import { NgoRegistrationComponent } from './components/ngo-dashboard-components/ngo-registration/ngo-registration.component';
import { NgoOrganizationDetailsComponent } from './components/ngo-dashboard-components/forms/ngo-organization-details/ngo-organization-details.component';
import { NgoContactDetailsComponent } from './components/ngo-dashboard-components/forms/ngo-contact-details/ngo-contact-details.component';
import { NgoCoursesComponent } from './components/ngo-dashboard-components/forms/ngo-courses/ngo-courses.component';
import { ErrorMessageComponent } from './components/utility/error-message/error-message.component';
import { SuccessMessageComponent } from './components/utility/success-message/success-message.component';
import { CourseDialogComponent } from './components/admin-components/course-dialog/course-dialog.component';
import { EditCourseDialogComponent } from './components/admin-components/edit-course-dialog/edit-course-dialog.component';
import { DeleteCourseConfirmationDialogComponent } from './components/admin-components/delete-course-confirmation-dialog/delete-course-confirmation-dialog.component';
import { LogoutMenuComponent } from './components/utility/logout-menu/logout-menu.component';
import { NgoApplicationDialogComponent } from './components/admin-components/ngo-application-dialog/ngo-application-dialog.component';
import { TraineeApplicationDialogComponent } from './components/admin-components/trainee-application-dialog/trainee-application-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StepDashboardComponent,
    NgoDashboardComponent,
    AdminDashboardComponent,
    StepComponent,
    LegislationAndPolicyComponent,
    NgoComponent,
    AdminComponent,
    FaqComponent,
    AboutUsComponent,
    RegistrationComponent,
    NgosComponent,
    GuidelinesComponent,
    TrainingSectorsComponent,
    HomeContentComponent,
    FooterComponent,
    StepNavigationMenuComponent,
    StepDashboardContentHeaderComponent,
    StepFaqComponent,
    StepStatusComponent,
    StepDashboardMainComponent,
    StepPersonalDetailsComponent,
    StepFamilyDetailsComponent,
    StepAddressDetailsComponent,
    CriteriaComponent,
    OrganizationsComponent,
    FundingNormsComponent,
    AdminNgosComponent,
    AdminTraineesComponent,
    AdminCoursesComponent,
    NgosFaqComponent,
    NgoStatusComponent,
    NgoNavigationMenuComponent,
    NgoDashboardMainComponent,
    AdminDashboardMainComponent,
    AdminNavigationMenuComponent,
    NgoRegistrationComponent,
    NgoOrganizationDetailsComponent,
    NgoContactDetailsComponent,
    NgoCoursesComponent,
    ErrorMessageComponent,
    SuccessMessageComponent,
    CourseDialogComponent,
    EditCourseDialogComponent,
    DeleteCourseConfirmationDialogComponent,
    LogoutMenuComponent,
    NgoApplicationDialogComponent,
    TraineeApplicationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    [FlexLayoutModule],
    MatButtonModule,
    MatCheckboxModule,
    MatSelectModule,
    MatDatepickerModule,
    MatButtonToggleModule,
    MatNativeDateModule,
    MatTableModule,
    MatInputModule,
    MatRadioModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
