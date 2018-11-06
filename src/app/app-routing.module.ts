import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { NewpwComponentComponent } from './newpw-component/newpw-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AuthGuard } from './auth/auth.guard';
import { FileUploadComponent } from './file-upload/file-upload.component';


export const appRoutes: Routes = [


  // 1st Route
{path: 'reg',  component: RegistrationComponent},
  // 6th Route
// { path: 'reg',  component: RegistraionComponent },
{path: 'login', component: LoginComponent,},
 {path: 'userprofile', component: UserProfileComponent,canActivate:[AuthGuard]
,children:[
  {path: 'userHome', component: FileUploadComponent},
//   {path: 'settings', component: SettingsComponent},
//   {path: 'gallery', component: GalleryComponent},
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
