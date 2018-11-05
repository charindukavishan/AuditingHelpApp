import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewpwComponentComponent } from './newpw-component.component';

describe('NewpwComponentComponent', () => {
  let component: NewpwComponentComponent;
  let fixture: ComponentFixture<NewpwComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewpwComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewpwComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
