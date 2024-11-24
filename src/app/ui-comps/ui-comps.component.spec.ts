import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiCompsComponent } from './ui-comps.component';

describe('UiCompsComponent', () => {
  let component: UiCompsComponent;
  let fixture: ComponentFixture<UiCompsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UiCompsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UiCompsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
