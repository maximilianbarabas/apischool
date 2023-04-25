/*
* File: app.service.spec.ts
* Author: Maximilian Barabas
* Copyright: M B 
* Group: Szoft II N 
* Date: 2023-04-20
* Github: https://github.com/maximilianbarabas
* Licenc: GNU GPL
*/


import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';

describe('ApiService', () => {
  let service: ApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
