import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Wildfit90Component } from './wildfit90.component';

describe('Wildfit90Component', () => {
  let component: Wildfit90Component;
  let fixture: ComponentFixture<Wildfit90Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Wildfit90Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Wildfit90Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
