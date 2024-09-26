import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfileRowMobileComponent } from './profile-row-mobile.component';

describe('ProfileRowMobileComponent', () => {
  let component: ProfileRowMobileComponent;
  let fixture: ComponentFixture<ProfileRowMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProfileRowMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProfileRowMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
