import { Injectable } from '@angular/core';

@Injectable()
export class MessageFormatterService {
  constructor() {}

  format(msg: string, type: string) {
    return `Logger (${type}): ${msg}`;
  }
}
