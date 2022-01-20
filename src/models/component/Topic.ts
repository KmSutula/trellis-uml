import { Queue } from './Queue';
import { API } from './API';

export class Topic extends Queue {
  stereotype = 'Topic';

  interfaces: {
    subscribe: API,
    publish: API,
  };

  constructor(label, config) {
    super(label, config);
    this.interfaces = {
      subscribe: new API('subscribe', { parentComponent: this }),
      publish: new API('publish', { parentComponent: this }),
    };
  }
}
