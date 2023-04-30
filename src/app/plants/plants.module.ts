import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ListPlantsComponent } from './list-plants/list-plants.component';
import { PlantsRoutingModule } from './plants-routing.module';
import { PlantsComponent } from './plants.component';

@NgModule({
  declarations: [PlantsComponent, ListPlantsComponent],
  imports: [CommonModule, PlantsRoutingModule],
})
export class PlantsModule {}
