import { MessageFormatterService } from './message-formatter.service';

export class LoggerService {
  constructor(
    private isEnabled: boolean,
    private messageFormatter: MessageFormatterService
  ) {}

  log(msg: string) {
    if (this.isEnabled) {
      console.log(this.messageFormatter.format(msg, 'debug'));
    } else {
      console.log('Logger is disabled');
    }
  }
}
