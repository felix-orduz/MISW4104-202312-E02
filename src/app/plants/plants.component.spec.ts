import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlantsComponent } from './plants.component';
import { PlantsModule } from './plants.module';

describe('PlantsComponent', () => {
  let component: PlantsComponent;
  let fixture: ComponentFixture<PlantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlantsModule],
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
