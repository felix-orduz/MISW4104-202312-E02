import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterTestingModule } from '@angular/router/testing';
import { faker } from '@faker-js/faker';
import { of } from 'rxjs';
import { PlantType } from '../enums/plant-type';
import { Plant } from '../model/plant';
import { PlantService } from '../service/plant.service';
import { ListPlantsComponent } from './list-plants.component';

describe('ListPlantsComponent', () => {
  let component: ListPlantsComponent;
  let fixture: ComponentFixture<ListPlantsComponent>;
  let plantService: jasmine.SpyObj<PlantService>;
  let debug: DebugElement;
  function createRandomPlant(): Plant {
    return {
      id: faker.datatype.number(100),
      nombre_comun: faker.random.word(),
      nombre_cientifico: faker.random.words(2),
      tipo: faker.helpers.arrayElement([
        PlantType.Interior,
        PlantType.Exterior,
      ]),
      altura_maxima: faker.datatype.number(15000),
      clima: faker.random.word(),
      sustrato_siembra: faker.lorem.lines(1),
    };
  }
  const plantsMock: Plant[] = [];

  Array.from({ length: 3 }).forEach(() => {
    plantsMock.push(createRandomPlant());
  });

  beforeEach(async () => {
    const plantServiceSpy = jasmine.createSpyObj('PlantService', ['getAll']);
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientTestingModule],
      declarations: [ListPlantsComponent],
      providers: [{ provide: PlantService, useValue: plantServiceSpy }],
    }).compileComponents();
    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;
    plantService = TestBed.inject(PlantService) as jasmine.SpyObj<PlantService>;
    debug = fixture.debugElement;
    plantService.getAll.and.returnValue(of(plantsMock));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAll', () => {
    expect(plantService.getAll).toHaveBeenCalled();
  });

  it('should show header cells', () => {
    const td = debug
      .query(By.all())
      .nativeElement.querySelectorAll('table>thead>tr>th');
    expect(td?.length).toEqual(4);
    expect(td[0].textContent).toEqual('#');
    expect(td[1].textContent).toEqual('Nombre Común');
    expect(td[2].textContent).toEqual('Tipo');
    expect(td[3].textContent).toEqual('Clima');
  });

  it('should show 3 rows', () => {
    const tr = debug
      .query(By.all())
      .nativeElement.querySelectorAll('table>tbody>tr');
    expect(tr?.length).toEqual(3);
  });
});
