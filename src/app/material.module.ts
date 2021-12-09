import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import {MatProgressBarModule} from '@angular/material/progress-bar';

@NgModule({
  imports: [MatButtonModule, 
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
    ],
  exports: [MatButtonModule, 
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatDividerModule,
    MatProgressBarModule
    ],
})
export class MaterialModule { }