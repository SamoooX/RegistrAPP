import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarDatosPage } from './editar-datos.page';

describe('EditarDatosPage', () => {
  let component: EditarDatosPage;
  let fixture: ComponentFixture<EditarDatosPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EditarDatosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
