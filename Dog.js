'use strict';

import data from './data.js';

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }
}

export default Dog;
