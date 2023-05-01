import { Component } from '@angular/core';
import { PlantType } from '../enums/plant-type';
import { Plant } from '../model/plant';
import { PlantService } from '../service/plant.service';

@Component({
  selector: 'list-plants',
  templateUrl: './list-plants.component.html',
  styleUrls: ['./list-plants.component.scss'],
})
export class ListPlantsComponent {
  constructor(private plantService: PlantService) {}
  plantList: Plant[] = [];
  totalInterior: number = 0;
  totalExterior: number = 0;

  ngOnInit(): void {
    this.plantService.getAll().subscribe((plantList) => {
      this.plantList = plantList;
      this.totalInterior = this.plantList.filter(
        (planta) => planta.tipo === PlantType.Interior
      ).length;

      this.totalExterior = this.plantList.filter(
        (planta) => planta.tipo === PlantType.Exterior
      ).length;
    });
  }
}
