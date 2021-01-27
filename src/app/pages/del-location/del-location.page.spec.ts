import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DelLocationPage } from './del-location.page';

describe('DelLocationPage', () => {
  let component: DelLocationPage;
  let fixture: ComponentFixture<DelLocationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DelLocationPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DelLocationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
