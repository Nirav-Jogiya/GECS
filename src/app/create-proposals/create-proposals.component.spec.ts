import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProposalsComponent } from './create-proposals.component';

describe('CreateProposalsComponent', () => {
  let component: CreateProposalsComponent;
  let fixture: ComponentFixture<CreateProposalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateProposalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProposalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
