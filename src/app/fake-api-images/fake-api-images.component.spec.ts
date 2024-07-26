import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FakeApiImagesComponent } from './fake-api-images.component';

describe('FakeApiImagesComponent', () => {
  let component: FakeApiImagesComponent;
  let fixture: ComponentFixture<FakeApiImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FakeApiImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FakeApiImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
