import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderEMenuComponent } from './header-e-menu.component';

describe('HeaderEMenuComponent', () => {
  let component: HeaderEMenuComponent;
  let fixture: ComponentFixture<HeaderEMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderEMenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderEMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
