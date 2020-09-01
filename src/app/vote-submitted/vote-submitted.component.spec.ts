import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteSubmittedComponent } from './vote-submitted.component';

describe('VoteSubmittedComponent', () => {
  let component: VoteSubmittedComponent;
  let fixture: ComponentFixture<VoteSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VoteSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
