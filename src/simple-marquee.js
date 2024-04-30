// options: {
//   node: selector | DOM element
// }

import { getNode } from "./modules/getNode";
import { createCopies } from "./modules/createCopies";
import setWrapperStyles from "./modules/setWrapperStyles";

class SimpleMarquee {
  constructor(node, options) {
    this._wrapper = getNode(node);
    this._content = this._wrapper.querySelector('.simple-marquee-content');
    this._copies = createCopies(this._wrapper, this._content);
    this._init();
  }

  _init() {
    setWrapperStyles(this._wrapper);

    this._copies.forEach(copy => {
      this._wrapper.appendChild(copy.node)
      copy.setOnPosition();
    })


    this._startAnimation();
  }

  _startAnimation() {
    const copies = this._copies;
    let prevTimestamp = performance.now();

    requestAnimationFrame(function animate(timestamp) {
      copies.forEach(copy => copy.updatePosition());

      prevTimestamp = timestamp;

      requestAnimationFrame(animate)
    })
  }
}

export function create(options) {
  return new SimpleMarquee(options);
}
