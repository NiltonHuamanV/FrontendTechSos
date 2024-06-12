import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarmodeloComponent } from './listarmodelo.component';

describe('ListarmodeloComponent', () => {
  let component: ListarmodeloComponent;
  let fixture: ComponentFixture<ListarmodeloComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListarmodeloComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListarmodeloComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
