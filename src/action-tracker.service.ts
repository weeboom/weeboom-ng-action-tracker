import {Injectable} from '@angular/core';

export interface IAction {
  id: symbol;
  index: number;
}

export interface ISteps {
  [key: string] : IAction;
}

export interface IActionSequence {
  id: symbol;
  name: string;
  steps: ISteps;
}

export const createActionSequence:
  (name: string, steps: { name: string, index: number }[]) => IActionSequence =
    (name, steps) => ({
      id: null,
      name,
      steps: steps.reduce((acum: ISteps, { name, index }) => {
        acum[name] = {
          id: null,
          index,
        };
        return acum;
      }, {}),
    });

@Injectable()
export class WbActionTrackerService {
  private currentScenario: IActionSequence;
  private resovler: Function;
  private expectedAction: IAction | IAction[];
  private currentAction: IAction;

  public startTracking(scenario: IActionSequence, resolver?: Function): void {
    this.currentScenario = scenario;
    this.resovler = resolver;
  }
  public stopTracking(): void {
    this.currentAction = null;
    this.currentScenario = null;
    this.resovler = null;
    this.expectedAction = null;
  }
  public expect(action: IAction | IAction[]): void {
    this.expectedAction = action;
  }
  public dispatch(action: IAction): void {
    this.currentAction = action;
  }
  public resolve(): void {
    this.resovler();
  }
}
