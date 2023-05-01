import { Component } from '@angular/core';
import { PlantService } from '../service/plant.service';
import { Plant } from '../model/plant';

@Component({
  selector: 'list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.scss']
})
export class ListPlantsComponent {
  constructor(private plantService: PlantService) {}
  plantList: Plant[] = [];

  ngOnInit(): void {
    this.plantService.getAll().subscribe((plantList) => {
      this.plantList = plantList;
    });
  }
}
