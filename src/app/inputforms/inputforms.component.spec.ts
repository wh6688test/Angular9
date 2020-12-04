import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InputformsComponent } from './inputforms.component';

describe('InputformsComponent', () => {
  let component: InputformsComponent;
  let fixture: ComponentFixture<InputformsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InputformsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InputformsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
