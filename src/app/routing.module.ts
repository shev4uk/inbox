import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleInboxComponent } from './single-inbox/single-inbox.component';
import { AuthGuard } from './auth.guard';

const Routes: Routes = [
  { path: 'login',  component: LoginComponent },
  // { path: 'inbox', component: InboxComponent},
  // { path: 'inbox/:id', component: SingleInboxComponent},
  { path: 'inbox', 
    canActivate: [AuthGuard],
    children: [
      { path: '', component: InboxComponent},
      { path: ':id', component: SingleInboxComponent}
    ] },
  { path: '', redirectTo: 'inbox', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(Routes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }
