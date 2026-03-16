import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarBandaComponent } from './modal-criar-banda.component';

describe('ModalCriarBandaComponent', () => {
  let component: ModalCriarBandaComponent;
  let fixture: ComponentFixture<ModalCriarBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarBandaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCriarBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
