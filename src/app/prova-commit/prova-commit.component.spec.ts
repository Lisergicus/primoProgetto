import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProvaCommitComponent } from './prova-commit.component';

describe('ProvaCommitComponent', () => {
  let component: ProvaCommitComponent;
  let fixture: ComponentFixture<ProvaCommitComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProvaCommitComponent]
    });
    fixture = TestBed.createComponent(ProvaCommitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
