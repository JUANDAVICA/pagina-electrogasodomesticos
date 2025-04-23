import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiciosEmpresaComponent } from './servicios-empresa.component';

describe('ServiciosEmpresaComponent', () => {
  let component: ServiciosEmpresaComponent;
  let fixture: ComponentFixture<ServiciosEmpresaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ServiciosEmpresaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiciosEmpresaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
