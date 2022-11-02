import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableUiEventsPageComponent } from './observable-ui-events-page.component';

describe('ObservableUiEventsPageComponent', () => {
  let component: ObservableUiEventsPageComponent;
  let fixture: ComponentFixture<ObservableUiEventsPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableUiEventsPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableUiEventsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
