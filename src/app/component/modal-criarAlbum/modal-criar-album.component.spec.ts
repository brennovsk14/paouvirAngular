import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalCriarAlbumComponent } from './modal-criar-album.component';

describe('ModalCriarAlbumComponent', () => {
  let component: ModalCriarAlbumComponent;
  let fixture: ComponentFixture<ModalCriarAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalCriarAlbumComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalCriarAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
