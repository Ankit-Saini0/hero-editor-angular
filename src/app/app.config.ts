import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, HttpClientModule, provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

export const appConfig: ApplicationConfig = {
  providers: [    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom(HttpClientModule),
    // provideHttpClient(withFetch()),
    importProvidersFrom(HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService))]
};
