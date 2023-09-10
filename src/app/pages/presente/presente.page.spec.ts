import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PresentePage } from './presente.page';

describe('PresentePage', () => {
  let component: PresentePage;
  let fixture: ComponentFixture<PresentePage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PresentePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
