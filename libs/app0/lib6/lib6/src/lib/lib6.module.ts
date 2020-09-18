
  import { NgModule } from '@angular/core';
  import { CommonModule } from '@angular/common';
  
  import { Childlib0Module } from '@rdt/app0/lib6/childlib0';
import { Childlib1Module } from '@rdt/app0/lib6/childlib1';
import { Childlib2Module } from '@rdt/app0/lib6/childlib2';
import { Childlib3Module } from '@rdt/app0/lib6/childlib3';
import { Childlib4Module } from '@rdt/app0/lib6/childlib4';
import { Childlib5Module } from '@rdt/app0/lib6/childlib5';
import { Childlib6Module } from '@rdt/app0/lib6/childlib6';
import { Childlib7Module } from '@rdt/app0/lib6/childlib7';
import { Childlib8Module } from '@rdt/app0/lib6/childlib8';
import { Childlib9Module } from '@rdt/app0/lib6/childlib9';
import { Lib6parentComponent } from './lib6parent/lib6parent.component';

  @NgModule({
    imports: [CommonModule, Childlib0Module, Childlib1Module, Childlib2Module, Childlib3Module, Childlib4Module, Childlib5Module, Childlib6Module, Childlib7Module, Childlib8Module, Childlib9Module],
    declarations: [Lib6parentComponent],
    exports: [Lib6parentComponent]
  })
  export class Lib6Module {}    
  