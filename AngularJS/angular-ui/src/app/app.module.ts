import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { ForLoopExComponent } from './for-loop-ex/for-loop-ex.component';
import { IpToCmpntComponent } from './ip-to-cmpnt/ip-to-cmpnt.component';
import { ObjIpToCmpntComponent } from './obj-ip-to-cmpnt/obj-ip-to-cmpnt.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    ForLoopExComponent,
    IpToCmpntComponent,
    ObjIpToCmpntComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
