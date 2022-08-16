'use strict';

import data from './data.js';

class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  setMatchStatus(bool) {
    this.hasBeenLiked = bool;
    this.hasBeenSwiped = true;
  }

  getDogHtml() {
    const { name, avatar, age, bio } = this;

    return `
    <div class="profile-bio">
            <h3>${name}, ${age}</h3>
            <p>${bio}</p>
          </div>
          <img src=${avatar} class="profile-picture"
          />
    `;
  }
}

export default Dog;
