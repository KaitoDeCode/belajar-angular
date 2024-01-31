import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TES2Component } from './tes2.component';

describe('TES2Component', () => {
  let component: TES2Component;
  let fixture: ComponentFixture<TES2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TES2Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TES2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
