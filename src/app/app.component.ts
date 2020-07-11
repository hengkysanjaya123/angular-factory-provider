import { Component, Inject } from '@angular/core';
import { LoggerService } from 'src/services/logger.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-factory-provider';

  constructor(private loggerService: LoggerService) {}

  createLog() {
    this.loggerService.log('hello world');
  }
}
