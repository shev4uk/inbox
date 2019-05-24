import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleInboxComponent } from './single-inbox.component';

describe('SingleInboxComponent', () => {
  let component: SingleInboxComponent;
  let fixture: ComponentFixture<SingleInboxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleInboxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleInboxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
