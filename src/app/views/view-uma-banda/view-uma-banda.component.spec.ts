import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewUmaBandaComponent } from './view-uma-banda.component';

describe('ViewUmaBandaComponent', () => {
  let component: ViewUmaBandaComponent;
  let fixture: ComponentFixture<ViewUmaBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewUmaBandaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ViewUmaBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
