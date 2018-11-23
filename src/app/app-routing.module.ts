import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { NewpwComponentComponent } from './newpw-component/newpw-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { AllusersComponent } from './admin-profile/allusers/allusers.component';
import { SentdocsComponent } from './admin-profile/sentdocs/sentdocs.component';
import { ReceiveComponent } from './user-profile/receive/receive.component';
import { ReceivedComponent } from './admin-profile/received/received.component';
import { MessagesComponent } from './admin-profile/messages/messages.component';
import { AdminuploadsComponent } from './admin-profile/adminuploads/adminuploads.component';
import { RoleGuardServiceGuard } from './auth/role-guard-service.guard';


export const appRoutes: Routes = [


  // 1st Route
{path: 'reg',  component: RegistrationComponent},
  // 6th Route
// { path: 'reg',  component: RegistraionComponent },
{path: 'login', component: LoginComponent,},
{path:'admin', component:AdminProfileComponent,canActivate:[RoleGuardServiceGuard],data: { 
  expectedRole: 'admin'
} ,
children:[
  {path:'allusers',component:AllusersComponent},
  {path:'sentdocs',component:SentdocsComponent},
  {path:'received',component:ReceivedComponent},
  {path:'messages',component:MessagesComponent},
  {path:'upload',component:AdminuploadsComponent},
  { path: '**',   redirectTo: 'allusers', pathMatch: 'full' },
]},
 {path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
,children:[
  {path: 'userHome', component: FileUploadComponent},
//   {path: 'settings', component: SettingsComponent},
  {path: 'gallery', component: ReceiveComponent},
  { path: '',   redirectTo: 'userHome', pathMatch: 'full' },
]
},
{path: 'resetpassword', component: ResetpwComponent},
{path: 'newpassword/:token', component: NewpwComponentComponent},

{ path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
