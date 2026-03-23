import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UmaBandaComponent } from './uma-banda.component';

describe('UmaBandaComponent', () => {
  let component: UmaBandaComponent;
  let fixture: ComponentFixture<UmaBandaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UmaBandaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UmaBandaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
