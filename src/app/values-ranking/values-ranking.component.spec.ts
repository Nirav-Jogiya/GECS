import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ValuesRankingComponent } from './values-ranking.component';

describe('ValuesRankingComponent', () => {
  let component: ValuesRankingComponent;
  let fixture: ComponentFixture<ValuesRankingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ValuesRankingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ValuesRankingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
