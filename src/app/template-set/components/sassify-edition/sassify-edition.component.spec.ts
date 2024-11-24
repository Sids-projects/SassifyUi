import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SassifyEditionComponent } from './sassify-edition.component';

describe('SassifyEditionComponent', () => {
  let component: SassifyEditionComponent;
  let fixture: ComponentFixture<SassifyEditionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SassifyEditionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SassifyEditionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
