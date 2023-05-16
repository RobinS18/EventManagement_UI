import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LogInComponent } from './login/log-in/log-in.component';
import { PageNotFoundComponent } from './login/page-not-found/page-not-found.component';

const routes: Routes = [
  {path:'**',component:PageNotFoundComponent},
  {path:'',redirectTo:'/log-in',pathMatch:'full'},
  {path:'log-in', component:LogInComponent,data: {
    breadcrumb: {
      label: 'Login',
      info: 'Login',
    },
  }
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
