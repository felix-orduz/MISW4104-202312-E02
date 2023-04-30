import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { HeaderComponent } from './shared/header/header/header.component';
import { FooterComponent } from './shared/footer/footer/footer.component';
import { RouterOutlet } from '@angular/router';
describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, SharedModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have a header component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debug: DebugElement = fixture.debugElement;
    const element: DebugElement = debug.query(
      By.directive(HeaderComponent)
    );
    expect(element).toBeTruthy();
  });

  it(`should have a footer component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debug: DebugElement = fixture.debugElement;
    const element: DebugElement = debug.query(
      By.directive(FooterComponent)
    );
    expect(element).toBeTruthy();
  });

  it(`should have a router outlet component`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const debug: DebugElement = fixture.debugElement;
    const element: DebugElement = debug.query(By.directive(RouterOutlet));
    expect(element).toBeTruthy();
  });
});
