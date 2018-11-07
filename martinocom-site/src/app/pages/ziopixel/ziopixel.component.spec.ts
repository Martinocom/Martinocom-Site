import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ZiopixelComponent } from './ziopixel.component';

describe('ZiopixelComponent', () => {
  let component: ZiopixelComponent;
  let fixture: ComponentFixture<ZiopixelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ZiopixelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ZiopixelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
