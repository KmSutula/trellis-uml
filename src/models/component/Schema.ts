import {
  Database, Component, ComponentType,
} from '..';

export class Schema extends Component {
  type = ComponentType.Schema;

  stereotype: string = 'Schema';

  protected _parentComponent?: Database;

  public get parentComponent(): Database {
    return this._parentComponent;
  }

  public set parentComponent(newEnvironment: Database) {
    this.parentComponent = newEnvironment;
  }
}
