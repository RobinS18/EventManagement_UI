import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LogInComponent } from './log-in/log-in.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MatFormFieldModule } from '@angular/material/form-field';


@NgModule({
  declarations: [
    LogInComponent,
    PageNotFoundComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule,
    MatFormFieldModule
  ]
})
export class LoginModule { }
