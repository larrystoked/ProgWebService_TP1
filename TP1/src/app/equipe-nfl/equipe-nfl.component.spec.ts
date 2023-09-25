import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipeNflComponent } from './equipe-nfl.component';

describe('EquipeNflComponent', () => {
  let component: EquipeNflComponent;
  let fixture: ComponentFixture<EquipeNflComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EquipeNflComponent]
    });
    fixture = TestBed.createComponent(EquipeNflComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
