import { RegisterComponent } from './register/register.component';
import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { FakeApiImagesComponent } from './fake-api-images/fake-api-images.component';
import { FakeApiDataComponent } from './fake-api-data/fake-api-data.component';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter([
    {path : '', redirectTo:'register',pathMatch:'full'},
    {path : 'register',component:RegisterComponent},
    {path : 'fake-api-image',component:FakeApiImagesComponent},
    {path : 'fake-api-data',component:FakeApiDataComponent},
  ]), provideClientHydration()]
};
