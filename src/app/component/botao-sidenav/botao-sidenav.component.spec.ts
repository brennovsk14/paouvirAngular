import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotaoSidenavComponent } from './botao-sidenav.component';

describe('BotaoSidenavComponent', () => {
  let component: BotaoSidenavComponent;
  let fixture: ComponentFixture<BotaoSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotaoSidenavComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BotaoSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

