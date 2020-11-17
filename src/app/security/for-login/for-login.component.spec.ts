import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoginComponent } from './for-login.component';

describe('ForLoginComponent', () => {
  let component: ForLoginComponent;
  let fixture: ComponentFixture<ForLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
