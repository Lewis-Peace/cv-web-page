import { NgModule } from '@angular/core';

import { MatTableModule } from '@angular/material/table'
import { MatTabsModule } from '@angular/material/tabs'
import { MatIconModule } from '@angular/material/icon'
import { MatDividerModule } from '@angular/material/divider'
import { MatCardModule } from '@angular/material/card'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatProgressBarModule } from '@angular/material/progress-bar'
import { MatButtonModule } from '@angular/material/button'
import { MatToolbarModule } from '@angular/material/toolbar'

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  exports: [
    MatTabsModule,
    MatTableModule,
    MatIconModule,
    MatDividerModule,
    MatCardModule,
    MatExpansionModule,
    MatProgressBarModule,
    MatButtonModule,
    MatToolbarModule,
    BrowserAnimationsModule
  ],
  providers: []
})
export class MaterialPackModule { }
