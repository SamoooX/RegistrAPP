import { ComponentFixture, TestBed } from '@angular/core/testing';
import { GqrPage } from './gqr.page';

describe('GqrPage', () => {
  let component: GqrPage;
  let fixture: ComponentFixture<GqrPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(GqrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
