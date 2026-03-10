import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarMusicaComponent } from './modal-criar-musica.component';

describe('ModalCriarMusicaComponent', () => {
  let component: ModalCriarMusicaComponent;
  let fixture: ComponentFixture<ModalCriarMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarMusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCriarMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
