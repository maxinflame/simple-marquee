const getNode = (node) => {
  switch (typeof(node)) {
    case 'string': {
      const el = document.querySelector(node);

      if (!el) throw new Error(`There is no element with selector '${node}'`);

      return el
    } 

    case 'object': {
      if (node instanceof HTMLElement) return node
    }

    default: {
      throw new Error(`Wrong type of marquee element (${typeof(node)}). Please use selector or DOM element`);
    }
  }
}

export { getNode }
