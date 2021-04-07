import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterDatailComponent } from './monster-datail.component';

describe('MonsterDatailComponent', () => {
  let component: MonsterDatailComponent;
  let fixture: ComponentFixture<MonsterDatailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterDatailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonsterDatailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
