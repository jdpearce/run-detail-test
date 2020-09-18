
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Lib0Module } from '@rdt/app0/lib0/lib0';
import { Lib1Module } from '@rdt/app0/lib1/lib1';
import { Lib2Module } from '@rdt/app0/lib2/lib2';
import { Lib3Module } from '@rdt/app0/lib3/lib3';
import { Lib4Module } from '@rdt/app0/lib4/lib4';
import { Lib5Module } from '@rdt/app0/lib5/lib5';
import { Lib6Module } from '@rdt/app0/lib6/lib6';
import { Lib7Module } from '@rdt/app0/lib7/lib7';
import { Lib8Module } from '@rdt/app0/lib8/lib8';
import { Lib9Module } from '@rdt/app0/lib9/lib9';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, Lib0Module, Lib1Module, Lib2Module, Lib3Module, Lib4Module, Lib5Module, Lib6Module, Lib7Module, Lib8Module, Lib9Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}

