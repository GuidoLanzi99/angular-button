import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BtnClickComponent } from './btn-click.component';

describe('BtnClickComponent', () => {
  let component: BtnClickComponent;
  let fixture: ComponentFixture<BtnClickComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BtnClickComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BtnClickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
