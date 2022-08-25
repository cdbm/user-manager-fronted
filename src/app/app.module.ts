import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { Router, RouterModule, Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { UserService } from './service/user.service';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';


var routes: Routes = [{
  path: "",
  component: UserComponent
}]
@NgModule({
  declarations: [
    AppComponent,
    UserComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(routes),
    NoopAnimationsModule,
    MatFormFieldModule,
    FormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
