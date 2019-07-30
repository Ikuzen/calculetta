import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculatorViewerComponent } from './calculator-viewer.component';

describe('CalculatorViewerComponent', () => {
  let component: CalculatorViewerComponent;
  let fixture: ComponentFixture<CalculatorViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculatorViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculatorViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
