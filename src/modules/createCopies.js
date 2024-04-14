const createCopies = (wrapper, content) => {
  const numOfCopies = Math.max(2, Math.ceil(wrapper.offsetWidth / content.offsetWidth + .1))
  const copies = [];

  for(let i = 0; i < numOfCopies; i++) {
    const copy = {
      node: content.cloneNode(true),
      setOnPosition: function() {
        if (this.prev.node.offsetWidth) {
          const prev = this.prev.node;
          this.node.style.position = 'absolute';
          this.node.style.top = '0px';
          this.node.style.left = `${Number(window.getComputedStyle(prev).left.match(/\d+/)[0]) + prev.offsetWidth}px`;
        } else {
          this.node.style.position = 'absolute';
          this.node.style.top = '0px';
          this.node.style.left = '0px';
        }
      }
    }

    if (i !== 0) copy.prev = copies[i - 1];

    copies.push(copy)
  }

  copies[0].prev = copies[numOfCopies - 1];

  return copies
} 

export { createCopies }