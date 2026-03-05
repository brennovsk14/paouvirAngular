import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAlbunsComponent } from './view-albuns.component';

describe('ViewAlbunsComponent', () => {
  let component: ViewAlbunsComponent;
  let fixture: ComponentFixture<ViewAlbunsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewAlbunsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewAlbunsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

