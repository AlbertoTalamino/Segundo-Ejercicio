import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarcosDetailsComponent } from './barcos-details.component';

describe('BarcosDetailsComponent', () => {
  let component: BarcosDetailsComponent;
  let fixture: ComponentFixture<BarcosDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarcosDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarcosDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
