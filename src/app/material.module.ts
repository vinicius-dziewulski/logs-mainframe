import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [MatButtonModule, 
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatProgressBarModule,
    MatPaginatorModule
    ],
  exports: [MatButtonModule, 
    MatToolbarModule,
    MatInputModule,
    MatTableModule,
    MatCardModule,
    MatProgressBarModule,
    MatPaginatorModule
    ]
})
export class MaterialModule { }