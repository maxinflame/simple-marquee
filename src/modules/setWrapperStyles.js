export default (wrapper) => {
  wrapper.style.overflow = 'hidden';
  wrapper.style.position = 'relative';
  wrapper.style.width = '100%'
  wrapper.style.height = `${wrapper.offsetHeight}px`;
  wrapper.innerHTML = '';
}