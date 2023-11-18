import React from 'react';

export default function useKeyDown(key, callback) {
  React.useEffect(() => {
    // verify callback is a function
    if (typeof callback !== 'function') {
      throw new Error(
        `Expected callback to be a function, found ${typeof callback}`
      );
    }

    function handleKeyDown(e) {
      if (e.code === key) {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeyDown);

    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [key, callback]);
}
