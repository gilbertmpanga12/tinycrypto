import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvestsheetmenuComponent } from './investsheetmenu.component';

describe('InvestsheetmenuComponent', () => {
  let component: InvestsheetmenuComponent;
  let fixture: ComponentFixture<InvestsheetmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvestsheetmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InvestsheetmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
