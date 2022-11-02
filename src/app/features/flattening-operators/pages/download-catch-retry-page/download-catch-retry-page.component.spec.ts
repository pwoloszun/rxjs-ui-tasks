import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCatchRetryPageComponent } from './download-catch-retry-page.component';

describe('DownloadCatchRetryPageComponent', () => {
  let component: DownloadCatchRetryPageComponent;
  let fixture: ComponentFixture<DownloadCatchRetryPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DownloadCatchRetryPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DownloadCatchRetryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
