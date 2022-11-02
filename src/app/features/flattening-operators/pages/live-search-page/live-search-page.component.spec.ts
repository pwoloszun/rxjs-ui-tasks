import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveSearchPageComponent } from './live-search-page.component';

describe('LiveSearchPageComponent', () => {
  let component: LiveSearchPageComponent;
  let fixture: ComponentFixture<LiveSearchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LiveSearchPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LiveSearchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
