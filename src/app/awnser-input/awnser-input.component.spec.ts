import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwnserInputComponent } from './awnser-input.component';

describe('AwnserInputComponent', () => {
  let component: AwnserInputComponent;
  let fixture: ComponentFixture<AwnserInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwnserInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwnserInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
