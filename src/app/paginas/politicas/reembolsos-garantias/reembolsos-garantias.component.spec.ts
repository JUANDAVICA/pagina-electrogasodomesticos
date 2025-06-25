import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReembolsosGarantiasComponent } from './reembolsos-garantias.component';

describe('ReembolsosGarantiasComponent', () => {
  let component: ReembolsosGarantiasComponent;
  let fixture: ComponentFixture<ReembolsosGarantiasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReembolsosGarantiasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReembolsosGarantiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
