// options: {
//   node: selector | DOM element
// }

import { getNode } from "./modules/getNode";
import { createCopies } from "./modules/createCopies";

class SimpleMarquee {
  constructor(node, options) {
    this._wrapper = getNode(node);
    this._content = this._wrapper.querySelector('.simple-marquee-content');
    this._copies = createCopies(this._wrapper, this._content);
    this._init();
  }

  _init() {
    this._wrapper.style.overflow = 'hidden';
    this._wrapper.style.position = 'relative';
    this._wrapper.style.width = '100%'
    this._wrapper.style.height = `${this._wrapper.offsetHeight}px`;

    this._wrapper.innerHTML = '';
    this._copies.forEach(copy => {
      this._wrapper.appendChild(copy.node)
      copy.setOnPosition();
    })
  }
}

export function create(options) {
  return new SimpleMarquee(options);
}
