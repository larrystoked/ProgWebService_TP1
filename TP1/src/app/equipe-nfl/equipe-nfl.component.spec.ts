import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeNFLComponent } from './equipe-nfl.component';

describe('EquipeNflComponent', () => {
  let component: EquipeNFLComponent;
  let fixture: ComponentFixture<EquipeNFLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipeNFLComponent]
    });
    fixture = TestBed.createComponent(EquipeNFLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
