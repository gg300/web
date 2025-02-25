import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PofilesComponent } from './pofiles.component';

describe('PofilesComponent', () => {
  let component: PofilesComponent;
  let fixture: ComponentFixture<PofilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PofilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PofilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
