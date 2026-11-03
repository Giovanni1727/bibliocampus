import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Navar } from './navar';

describe('Navar', () => {
  let component: Navar;
  let fixture: ComponentFixture<Navar>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navar],
    }).compileComponents();

    fixture = TestBed.createComponent(Navar);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
