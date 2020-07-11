import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from 'src/services/logger.service';
import { MessageFormatterService } from 'src/services/message-formatter.service';

const loggerFactory = (formatter: MessageFormatterService) => {
  return new LoggerService(true, formatter);
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    MessageFormatterService,
    {
      provide: LoggerService,
      useFactory: loggerFactory,
      deps: [MessageFormatterService],
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
