import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDisplay1Component } from './card-display1.component';

describe('CardDisplay1Component', () => {
  let component: CardDisplay1Component;
  let fixture: ComponentFixture<CardDisplay1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDisplay1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDisplay1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
