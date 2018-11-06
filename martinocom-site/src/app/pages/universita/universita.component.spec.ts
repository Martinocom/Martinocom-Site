import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniversitaComponent } from './universita.component';

describe('UniversitaComponent', () => {
  let component: UniversitaComponent;
  let fixture: ComponentFixture<UniversitaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversitaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniversitaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
