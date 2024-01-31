import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TESComponent } from './tes.component';

describe('TESComponent', () => {
  let component: TESComponent;
  let fixture: ComponentFixture<TESComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TESComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TESComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
