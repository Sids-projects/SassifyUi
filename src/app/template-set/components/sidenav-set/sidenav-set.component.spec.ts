import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavSetComponent } from './sidenav-set.component';

describe('SidenavSetComponent', () => {
  let component: SidenavSetComponent;
  let fixture: ComponentFixture<SidenavSetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavSetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SidenavSetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
