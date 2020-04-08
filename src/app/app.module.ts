import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestformComponent } from './testform/testform.component';
import { TestformService } from './testform.service';

@NgModule({
  declarations: [
    AppComponent,
    TestformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
    
  ],
  providers: [TestformService],
  bootstrap: [AppComponent]
})
export class AppModule { }
