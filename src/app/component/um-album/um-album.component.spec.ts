import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmAlbumComponent } from './um-album.component';

describe('UmAlbumComponent', () => {
  let component: UmAlbumComponent;
  let fixture: ComponentFixture<UmAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmAlbumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UmAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
