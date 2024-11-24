import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateSetComponent } from './template-set.component';

describe('TemplateSetComponent', () => {
  let component: TemplateSetComponent;
  let fixture: ComponentFixture<TemplateSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TemplateSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TemplateSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
