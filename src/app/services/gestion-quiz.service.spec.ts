import { TestBed } from '@angular/core/testing';

import { GestionQuizService } from './gestion-quiz.service';

describe('GestionQuizService', () => {
  let service: GestionQuizService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GestionQuizService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
