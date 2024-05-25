export default (wrapper) => {
  wrapper.style.overflow = 'hidden';
  wrapper.style.position = 'relative';
  wrapper.style.width = '100%';
  wrapper.style.display = 'block';
  wrapper.style.height = `${wrapper.querySelector('.simple-marquee-content').getBoundingClientRect().height}px`;
  wrapper.innerHTML = '';
}