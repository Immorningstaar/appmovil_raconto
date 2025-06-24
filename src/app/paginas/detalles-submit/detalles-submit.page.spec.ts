import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetallesSubmitPage } from './detalles-submit.page';

describe('DetallesSubmitPage', () => {
  let component: DetallesSubmitPage;
  let fixture: ComponentFixture<DetallesSubmitPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesSubmitPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
