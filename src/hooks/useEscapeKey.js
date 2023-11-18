export default function useEscapeKey(callback) {
  // verify callback is a function
  if (typeof callback !== 'function') {
    throw new Error(
      `Expected callback to be a function, found ${typeof callback}`
    );
  }

  function handleKeyDown(e) {
    if (e.code === 'Escape') {
      callback();
    }
  }

  window.addEventListener('keydown', handleKeyDown);

  return () => window.removeEventListener('keydown', handleKeyDown);
}
