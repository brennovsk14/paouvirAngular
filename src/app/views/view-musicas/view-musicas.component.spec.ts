import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMusicasComponent } from './view-musicas.component';

describe('ViewMusicasComponent', () => {
  let component: ViewMusicasComponent;
  let fixture: ComponentFixture<ViewMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

