import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLaboralComponent } from './card-laboral.component';

describe('CardLaboralComponent', () => {
  let component: CardLaboralComponent;
  let fixture: ComponentFixture<CardLaboralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLaboralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardLaboralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
