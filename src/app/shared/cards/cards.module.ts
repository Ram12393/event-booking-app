import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardType1Component } from './card-type1/card-type1.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CardType1Component
  ],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    CardType1Component
  ]
})
export class CardsModule { }
