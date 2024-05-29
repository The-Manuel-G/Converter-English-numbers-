import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TraductorNumberPage } from './traductor-number.page';

describe('TraductorNumberPage', () => {
  let component: TraductorNumberPage;
  let fixture: ComponentFixture<TraductorNumberPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TraductorNumberPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
