import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { AdminComponent } from './components/home-components/admin/admin.component';
import { FaqComponent } from './components/home-components/faq/faq.component';
import { HomeContentComponent } from './components/home-components/home-content/home-content.component';
import { LegislationAndPolicyComponent } from './components/home-components/legislation-and-policy/legislation-and-policy.component';
import { NgoComponent } from './components/home-components/ngo/ngo.component';
import { StepComponent } from './components/home-components/step/step.component';
import { HomeComponent } from './components/home/home.component';
import { GuidelinesComponent } from './components/step-dashboard-components/guidelines/guidelines.component';
import { NgosComponent } from './components/step-dashboard-components/ngos/ngos.component';
import { RegistrationComponent } from './components/step-dashboard-components/registration/registration.component';
import { StepStatusComponent } from './components/step-dashboard-components/step-status/step-status.component';
import { StepFaqComponent } from './components/step-dashboard-components/step-faq/step-faq.component';
import { TrainingSectorsComponent } from './components/step-dashboard-components/training-sectors/training-sectors.component';
import { StepDashboardComponent } from './components/step-dashboard/step-dashboard.component';
import { StepDashboardMainComponent } from './components/step-dashboard-components/step-dashboard-main/step-dashboard-main.component';
import { StepPersonalDetailsComponent } from './components/step-dashboard-components/forms/step-personal-details/step-personal-details.component';
import { StepAddressDetailsComponent } from './components/step-dashboard-components/forms/step-address-details/step-address-details.component';
import { StepFamilyDetailsComponent } from './components/step-dashboard-components/forms/step-family-details/step-family-details.component';
import { CriteriaComponent } from './components/ngo-dashboard-components/criteria/criteria.component';
import { FundingNormsComponent } from './components/ngo-dashboard-components/funding-norms/funding-norms.component';
import { NgosFaqComponent } from './components/ngo-dashboard-components/ngos-faq/ngos-faq.component';
import { NgoStatusComponent } from './components/ngo-dashboard-components/ngo-status/ngo-status.component';
import { OrganizationsComponent } from './components/ngo-dashboard-components/organizations/organizations.component';
import { NgoDashboardMainComponent } from './components/ngo-dashboard-components/ngo-dashboard-main/ngo-dashboard-main.component';
import { AdminDashboardMainComponent } from './components/admin-components/admin-dashboard-main/admin-dashboard-main.component';
import { AdminDashboardComponent } from './components/admin-dashboard/admin-dashboard.component';
import { AdminCoursesComponent } from './components/admin-components/admin-courses/admin-courses.component';
import { AdminNgosComponent } from './components/admin-components/admin-ngos/admin-ngos.component';
import { AdminTraineesComponent } from './components/admin-components/admin-trainees/admin-trainees.component';
import { NgoDashboardComponent } from './components/ngo-dashboard/ngo-dashboard.component';
import { NgoRegistrationComponent } from './components/ngo-dashboard-components/ngo-registration/ngo-registration.component';
import { NgoOrganizationDetailsComponent } from './components/ngo-dashboard-components/forms/ngo-organization-details/ngo-organization-details.component';
import { NgoContactDetailsComponent } from './components/ngo-dashboard-components/forms/ngo-contact-details/ngo-contact-details.component';
import { NgoCoursesComponent } from './components/ngo-dashboard-components/forms/ngo-courses/ngo-courses.component';
import { ProgrammeComponent } from './components/home-components/programme/programme.component';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  // Home
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {path: '', component: HomeContentComponent},
      {path: 'step', component: StepComponent},
      {path: 'ngo', component: NgoComponent},
      {path: 'admin', component: AdminComponent},
      {path: 'legislation-and-policy', component: LegislationAndPolicyComponent},
      {path: 'faq', component: FaqComponent},
      {path: 'about-us', component: AboutUsComponent},
      {path: 'programmes', component: ProgrammeComponent},
    ]
  },

  // STEP Dashboard
  {
    path: 'step',
    component: StepDashboardComponent,
    children: [
      {path: 'dashboard', component: StepDashboardMainComponent},
      {
        path: 'registration', 
        component: RegistrationComponent,
        children: [
          {path: 'trainee-personal-details', component: StepPersonalDetailsComponent},
          {path: 'trainee-family-details', component: StepFamilyDetailsComponent},
          {path: 'trainee-address-details', component: StepAddressDetailsComponent}
        ]
      },
      {path: 'guidelines', component: GuidelinesComponent},
      {path: 'training-sectors', component: TrainingSectorsComponent},
      {path: 'ngos', component: NgosComponent},
      {path: 'faq', component: StepFaqComponent},
      {path: 'status', component: StepStatusComponent}
    ]
  },

  {
    path: 'ngo', 
    component: NgoDashboardComponent,
    children: [
      {
        path: 'registration', 
        component: NgoRegistrationComponent,
        children: [
          {path: 'ngo-organization-details', component: NgoOrganizationDetailsComponent},
          {path: 'ngo-contact-details', component: NgoContactDetailsComponent},
          {path: 'ngo-courses', component: NgoCoursesComponent}
        ]
      },
      {path: 'dashboard', component: NgoDashboardMainComponent},
      {path: 'organizations', component: OrganizationsComponent},
      {path: 'criteria', component: CriteriaComponent},
      {path: 'funding-norms', component: FundingNormsComponent},
      {path: 'registration', component: NgoRegistrationComponent},
      {path: 'faq', component: NgosFaqComponent},
      {path: 'status', component: NgoStatusComponent}
    ]
  },
  {
    path: 'admin',
    component: AdminDashboardComponent,
    children: [
      {path: 'dashboard', component: AdminDashboardMainComponent},
      {path: 'courses', component: AdminCoursesComponent},
      {path: 'application/ngos', component: AdminNgosComponent},
      {path: 'application/trainees', component: AdminTraineesComponent}
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
