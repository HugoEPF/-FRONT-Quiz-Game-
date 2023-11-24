import { TestBed } from '@angular/core/testing';

import { DetailQuizService } from './detail-quiz.service';

describe('DetailQuizService', () => {
  let service: DetailQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DetailQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
