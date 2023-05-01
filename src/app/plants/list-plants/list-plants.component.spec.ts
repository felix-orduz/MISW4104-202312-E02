import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPlantsComponent } from './list-plants.component';
import { HttpClientModule } from '@angular/common/http';

describe('ListPlantsComponent', () => {
  let component: ListPlantsComponent;
  let fixture: ComponentFixture<ListPlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ HttpClientModule],
      declarations: [ ListPlantsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
