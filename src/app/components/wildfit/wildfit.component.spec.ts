import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WildfitComponent } from './wildfit.component';

describe('WildfitComponent', () => {
  let component: WildfitComponent;
  let fixture: ComponentFixture<WildfitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WildfitComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WildfitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
