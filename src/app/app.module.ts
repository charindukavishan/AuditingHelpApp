import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ResetpwComponent } from './resetpw/resetpw.component';
import { NewpwComponentComponent } from './newpw-component/newpw-component.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegserviceService } from './servers/regservice.service';
import { AuthGuard } from './auth/auth.guard';
import { HttpModule } from '@angular/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    ResetpwComponent,
    NewpwComponentComponent,
    UserProfileComponent,
    FileUploadComponent,
    FileSelectDirective
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpModule
  ],
  providers: [RegserviceService,AuthGuard,{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
