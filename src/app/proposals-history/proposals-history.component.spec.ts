import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalsHistoryComponent } from './proposals-history.component';

describe('ProposalsHistoryComponent', () => {
  let component: ProposalsHistoryComponent;
  let fixture: ComponentFixture<ProposalsHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalsHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalsHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
