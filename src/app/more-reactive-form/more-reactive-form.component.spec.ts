import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoreReactiveFormComponent } from './more-reactive-form.component';

describe('MoreReactiveFormComponent', () => {
  let component: MoreReactiveFormComponent;
  let fixture: ComponentFixture<MoreReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoreReactiveFormComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MoreReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
