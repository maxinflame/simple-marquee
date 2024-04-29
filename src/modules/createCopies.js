class Copy {
  constructor(content) {
    this.node = content.cloneNode(true);
    this.prev = null;
  }

  setOnPosition() {
    this.node.style.position = 'absolute';
    this.node.style.top = '0px';

    if (this.prev) {
      this.left = this.prev.left + this.prev.node.offsetWidth;
    } else {
      this.left = 0;
    }

    this.node.style.left = `${this.left}px`
  }
}

const createCopies = (wrapper, content) => {
  const numOfCopies = Math.max(2, Math.ceil(wrapper.offsetWidth / content.offsetWidth + .1))
  const copies = [];

  for(let i = 0; i < numOfCopies; i++) {
    const copy = new Copy(content);
    if (i !== 0) copy.prev = copies[i - 1];
    copies.push(copy)
  }

  return copies
} 

export { createCopies }