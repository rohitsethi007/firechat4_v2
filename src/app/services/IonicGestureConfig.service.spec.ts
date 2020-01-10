import { TestBed } from '@angular/core/testing';
import { IonicGestureConfigService } from './IonicGestureConfig.service';


describe('IonicGestureConfigService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: IonicGestureConfigService = TestBed.get(LoginService);
    expect(service).toBeTruthy();
  });
});
