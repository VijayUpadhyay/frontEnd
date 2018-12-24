import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForLoopExComponent } from './for-loop-ex.component';

describe('ForLoopExComponent', () => {
  let component: ForLoopExComponent;
  let fixture: ComponentFixture<ForLoopExComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForLoopExComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForLoopExComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
