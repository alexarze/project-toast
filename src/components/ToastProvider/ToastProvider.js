import React from 'react';

import useEscapeKey from '../../hooks/use-keydown';

export const ToastContext = React.createContext();

function ToastProvider({ children, ...delegated }) {
  const [toasts, setToasts] = React.useState([]);

  const clearToasts = React.useCallback(() => {
    setToasts([]);
  }, []);

  useEscapeKey('Escape', clearToasts);

  function addToast(message, variant) {
    const newToasts = [
      ...toasts,
      { message, variant, id: crypto.randomUUID() },
    ];

    setToasts(newToasts);
  }

  function dismissToast(id) {
    const newToasts = toasts.filter((item) => {
      return item.id !== id;
    });

    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, dismissToast, ...delegated }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
