// 
// node: selector | DOM element
// options: {
//   speed: number | string (pixels per sec)
// }

import { getNode } from "./modules/getNode";
import { createCopies } from "./modules/createCopies";
import setWrapperStyles from "./modules/setWrapperStyles";
import { DEFAULT_SPEED } from "./modules/variables";

class SimpleMarquee {
  constructor(node, options) {
    this._wrapper = getNode(node);
    this._content = this._wrapper.querySelector('.simple-marquee-content');
    this._copies = createCopies(this._wrapper, this._content);
    options?.speed? this._speed = Number(options.speed): this._speed = DEFAULT_SPEED
  
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
    const speed = this._speed;
    let prevTimestamp = performance.now();

    requestAnimationFrame(function animate(timestamp) {
      const shift = (timestamp - prevTimestamp) * speed / 1000;

      copies.forEach(copy => copy.updatePosition(shift.toFixed(2)));

      prevTimestamp = timestamp;

      requestAnimationFrame(animate)
    })
  }
}

export function create(node, options) {
  return new SimpleMarquee(node, options);
}
