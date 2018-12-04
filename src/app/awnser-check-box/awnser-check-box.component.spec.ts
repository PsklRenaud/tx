import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AwnserCheckBoxComponent } from './awnser-check-box.component';

describe('AwnserCheckBoxComponent', () => {
  let component: AwnserCheckBoxComponent;
  let fixture: ComponentFixture<AwnserCheckBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AwnserCheckBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AwnserCheckBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
