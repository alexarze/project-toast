import React from 'react';

import useEscapeKey from '../../hooks/useEscapeKey';

export const ToastContext = React.createContext();

function ToastProvider({ children, ...delegated }) {
  const [toasts, setToasts] = React.useState([]);

  useEscapeKey(() => setToasts([]));

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
