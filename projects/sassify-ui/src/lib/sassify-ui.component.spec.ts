import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassifyUiComponent } from './sassify-ui.component';

describe('SassifyUiComponent', () => {
  let component: SassifyUiComponent;
  let fixture: ComponentFixture<SassifyUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SassifyUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SassifyUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
