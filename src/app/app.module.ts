import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
  ],
  declarations: [AppComponent, LoginComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
