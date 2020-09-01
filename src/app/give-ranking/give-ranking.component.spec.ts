import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GiveRankingComponent } from './give-ranking.component';

describe('GiveRankingComponent', () => {
  let component: GiveRankingComponent;
  let fixture: ComponentFixture<GiveRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GiveRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GiveRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
