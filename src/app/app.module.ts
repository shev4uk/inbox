import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RoutingModule } from './routing.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { InboxComponent } from './inbox/inbox.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SingleInboxComponent } from './single-inbox/single-inbox.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InboxComponent,
    PageNotFoundComponent,
    SingleInboxComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
