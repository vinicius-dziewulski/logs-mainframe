import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';




@NgModule({
  imports: [MatButtonModule, 
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
    ],
  exports: [MatButtonModule, 
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatDatepickerModule,
    MatNativeDateModule
    ],
})
export class MaterialModule { }