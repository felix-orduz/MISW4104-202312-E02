import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { faker } from '@faker-js/faker';
import { Plant } from '../model/plant';
import { PlantService } from './plant.service';

describe('PlantService', () => {
  let plantService: PlantService;
  function createRandomPlants(): Plant {
    return {
      id: faker.datatype.number(100),
      nombre_comun: faker.random.word(),
      nombre_cientifico: faker.random.words(2),
      tipo: faker.random.word(),
      altura_maxima: faker.datatype.number(15000),
      clima: faker.random.word(),
      sustrato_siembra: faker.lorem.lines(1),
    };
  }
  const plantsMock: Plant[] = [];

  Array.from({ length: 100 }).forEach(() => {
    plantsMock.push(createRandomPlants());
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PlantService],
    });
    plantService = TestBed.inject(PlantService);
  });

  it('should be created', () => {
    expect(plantService).toBeTruthy();
  });

  it('should return a list of Plats', () => {
    plantService.getAll().subscribe((data) => {
      expect(data.length).toEqual(plantsMock.length);
      expect(data).toEqual(plantsMock);
    });
  });
});
