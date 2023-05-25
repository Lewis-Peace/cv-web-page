import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  exports: [
    MatTabsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule
  ],
  providers: []
})
export class MaterialPackModule { }
