import {
  Database, Processor, Service, UI, API,
} from '..';
import { ComponentRelationship } from './ComponentRelationship';

export class Requires extends ComponentRelationship {
  diagramFragmentBefore: string = '-';

  diagramFragmentAfter: string = 'down-(';

  source: Service | UI | Processor | Database;

  target: API;
}
