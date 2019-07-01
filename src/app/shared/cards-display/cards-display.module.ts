import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardDisplay1Component } from './card-display1/card-display1.component';
import { CardsModule } from '../cards/cards.module';

@NgModule({
  declarations: [
    CardDisplay1Component,
  ],
  imports: [
    CommonModule,
    CardsModule
  ],
  exports: [
    CardDisplay1Component,
  ]
})
export class CardsDisplayModule { }
