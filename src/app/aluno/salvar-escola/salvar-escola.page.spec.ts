import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SalvarEscolaPage } from './salvar-escola.page';

describe('SalvarEscolaPage', () => {
  let component: SalvarEscolaPage;
  let fixture: ComponentFixture<SalvarEscolaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SalvarEscolaPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SalvarEscolaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
