import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListcontentComponent } from './listcontent.component';

describe('ListcontentComponent', () => {
  let component: ListcontentComponent;
  let fixture: ComponentFixture<ListcontentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListcontentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListcontentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
