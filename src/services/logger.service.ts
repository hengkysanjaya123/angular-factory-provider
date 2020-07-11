import { Injectable, Inject } from '@angular/core';

export class LoggerService {
  constructor(private isEnabled: boolean) {}

  log(msg: string) {
    if (this.isEnabled) {
      console.log(`Logger: ${msg}`);
    }
    else{
      console.log('Logger is disabled');
    }
  }
}
