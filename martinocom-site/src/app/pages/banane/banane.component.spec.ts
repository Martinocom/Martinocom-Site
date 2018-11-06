import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BananeComponent } from './banane.component';

describe('BananeComponent', () => {
  let component: BananeComponent;
  let fixture: ComponentFixture<BananeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BananeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BananeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
