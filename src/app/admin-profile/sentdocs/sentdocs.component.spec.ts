import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SentdocsComponent } from './sentdocs.component';

describe('SentdocsComponent', () => {
  let component: SentdocsComponent;
  let fixture: ComponentFixture<SentdocsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SentdocsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SentdocsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
