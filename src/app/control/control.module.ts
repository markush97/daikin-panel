import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RoomComponent } from './room/room.component';
import { ControlComponent } from './control/control.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { NgxGaugeModule } from 'ngx-gauge';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatSliderModule } from '@angular/material/slider';

@NgModule({
  declarations: [RoomComponent, ControlComponent ],
  imports: [
    CommonModule,
    MatButtonToggleModule,
    MatTooltipModule,
    MatIconModule,
    NgxGaugeModule,
    MatCardModule,
    MatGridListModule,
    MatSliderModule
  ]
})
export class ControlModule { }
