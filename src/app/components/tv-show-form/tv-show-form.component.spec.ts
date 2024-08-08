import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvShowFormComponent } from './tv-show-form.component';

describe('TvShowFormComponent', () => {
  let component: TvShowFormComponent;
  let fixture: ComponentFixture<TvShowFormComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TvShowFormComponent]
    });
    fixture = TestBed.createComponent(TvShowFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
