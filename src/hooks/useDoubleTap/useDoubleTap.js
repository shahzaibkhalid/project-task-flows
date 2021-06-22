import { useCallback, useRef } from 'react';

function useDoubleTap(callback, threshold = 300, onSingleTap) {
  const timer = useRef(null);
  const handler = useCallback(
    (event, ...args) => {
      if (!timer.current) {
        timer.current = setTimeout(() => {
          if (onSingleTap) {
            onSingleTap(event, ...args);
          }
          timer.current = null;
        }, threshold);
      } else {
        clearTimeout(timer.current);
        timer.current = null;
        callback && callback(event, ...args);
      }
    },
    [callback, threshold, onSingleTap]
  );
  return callback ? handler : {};
}

export default useDoubleTap;
