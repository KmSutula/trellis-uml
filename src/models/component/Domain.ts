/* eslint-disable class-methods-use-this */
import { Component, ComponentType } from '..';

export class Domain extends Component {
  type = ComponentType.ExecutionEnvironment;

  protected _parentComponent?: Component;

  public get parentComponent(): Component {
    return null;
  }

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  public set parentComponent(newEnvironment: Component) {

  }

  stereotype = 'Domain';
}
