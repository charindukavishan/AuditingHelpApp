import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminuploadsComponent } from './adminuploads.component';

describe('AdminuploadsComponent', () => {
  let component: AdminuploadsComponent;
  let fixture: ComponentFixture<AdminuploadsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminuploadsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminuploadsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
