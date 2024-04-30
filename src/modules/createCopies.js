class Copy {
  constructor(content) {
    this.node = content.cloneNode(true);
    this.prev = null;
    this.left = 0;
  }

  setOnPosition() {
    this.node.style.position = 'absolute';
    this.node.style.top = '0px';

    if (this.prev) {
      this.left = this.prev.left + this.prev.node.getBoundingClientRect().width;
    }

    this.node.style.left = `${this.left}px`
  }

  updatePosition() {
    if (this.prev) {
      this.left = this.prev.left + this.prev.node.getBoundingClientRect().width;
    } else {
      this.left -= 1;
    }

    this.node.style.left = `${this.left}px`;


    if (this.left < -this.node.offsetWidth) {
      this.next.prev = null;

      let nextEl = this.next;
      let lastEl;

      while(nextEl) {
        lastEl = nextEl;
        nextEl = nextEl.next;
      }

      this.next = null;
      this.prev = lastEl;
      lastEl.next = this;
    }
  }
}

const createCopies = (wrapper, content) => {
  content.style.width = 'min-content';
  const numOfCopies = Math.max(3, Math.ceil(wrapper.getBoundingClientRect().width / content.getBoundingClientRect().width + 1))
  const copies = [];

  for(let i = 0; i < numOfCopies; i++) {
    const copy = new Copy(content);
    if (i !== 0) {
      copy.prev = copies[i - 1];
      copies[i - 1].next = copy;
    }
    copies.push(copy)
  }

  return copies
} 

export { createCopies }