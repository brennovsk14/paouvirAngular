import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUmAlbumComponent } from './view-um-album.component';

describe('ViewUmAlbumComponent', () => {
  let component: ViewUmAlbumComponent;
  let fixture: ComponentFixture<ViewUmAlbumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUmAlbumComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewUmAlbumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
