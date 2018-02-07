import {Injectable} from '@angular/core';

@Injectable()
export class WbActionTrackerService {
  private currentScenario: any;
  private expectedAction: any;
  private currentAction: any;

  public startTracking(scenario: any): void {}
  public stopTracking(): void {}
  public expect(action: any): void {}
  public dispatch(): void {}
  public resolve(): void {}
}
