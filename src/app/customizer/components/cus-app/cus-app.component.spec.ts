import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CusAppComponent } from './cus-app.component';

describe('CusAppComponent', () => {
  let component: CusAppComponent;
  let fixture: ComponentFixture<CusAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CusAppComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CusAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
