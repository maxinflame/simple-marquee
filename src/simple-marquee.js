// options: {
//   node: selector | DOM element
// }

import { getNode } from "./modules/utils/getNode";

class SimpleMarquee {
  constructor(node, options) {
    this.wrapper = getNode(node);

    console.log(this.wrapper)
  }
}

export function create(options) {
  return new SimpleMarquee(options);
}
