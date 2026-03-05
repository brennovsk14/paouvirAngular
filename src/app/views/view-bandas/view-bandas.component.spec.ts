import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewBandasComponent } from './view-bandas.component';

describe('ViewBandasComponent', () => {
  let component: ViewBandasComponent;
  let fixture: ComponentFixture<ViewBandasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewBandasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewBandasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

