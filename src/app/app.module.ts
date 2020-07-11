import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoggerService } from 'src/services/logger.service';

const loggerFactory = () => {
  return new LoggerService(true);
};

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LoggerService,
      useFactory: loggerFactory,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
