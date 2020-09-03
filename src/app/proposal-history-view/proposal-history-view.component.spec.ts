import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalHistoryViewComponent } from './proposal-history-view.component';

describe('ProposalHistoryViewComponent', () => {
  let component: ProposalHistoryViewComponent;
  let fixture: ComponentFixture<ProposalHistoryViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProposalHistoryViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProposalHistoryViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
