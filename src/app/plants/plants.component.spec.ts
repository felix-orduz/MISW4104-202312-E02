import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsComponent } from './plants.component';
import { PlantsModule } from './plants.module';
import { HttpClientModule } from '@angular/common/http';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsModule, HttpClientModule],
      declarations: [PlantsComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(PlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
