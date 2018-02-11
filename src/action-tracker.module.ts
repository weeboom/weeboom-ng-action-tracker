import {NgModule, ModuleWithProviders} from '@angular/core';

import {WbActionTrackerService} from './action-tracker.service';

@NgModule({})
export class WbActionTrackerModule {
  public static forRoot(): ModuleWithProviders {
    return {
      ngModule: WbActionTrackerModule,
      providers: [
        WbActionTrackerService,
      ],
    };
  }
}
