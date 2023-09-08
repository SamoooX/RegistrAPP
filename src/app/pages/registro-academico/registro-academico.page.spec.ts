import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RegistroAcademicoPage } from './registro-academico.page';

describe('RegistroAcademicoPage', () => {
  let component: RegistroAcademicoPage;
  let fixture: ComponentFixture<RegistroAcademicoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RegistroAcademicoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
