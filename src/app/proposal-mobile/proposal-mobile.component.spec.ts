import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposalMobileComponent } from './proposal-mobile.component';

describe('ProposalMobileComponent', () => {
  let component: ProposalMobileComponent;
  let fixture: ComponentFixture<ProposalMobileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProposalMobileComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProposalMobileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
