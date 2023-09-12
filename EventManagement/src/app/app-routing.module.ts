import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './login/log-in/log-in.component';
import { PageNotFoundComponent } from './login/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'LogIn', component:LogInComponent},
  {path:'',redirectTo:'/LogIn',pathMatch:'full'},
  {path:'404',component:PageNotFoundComponent},
  {path:'**',redirectTo:'/404',pathMatch:'full'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
