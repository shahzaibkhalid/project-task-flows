function isTouchDevice() {
  return typeof window !== 'undefined' && 'ontouchstart' in window;
}

export default isTouchDevice;
