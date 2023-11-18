import React from 'react';

export const ToastContext = React.createContext();

function ToastProvider({ children, ...delegated }) {
  const [toasts, setToasts] = React.useState([]);

  function addToast(message, variant) {
    const newToasts = [
      ...toasts,
      { message, variant, id: crypto.randomUUID() },
    ];

    setToasts(newToasts);
  }

  function removeToast(id) {
    const newToasts = toasts.filter((item) => {
      return item.id !== id;
    });

    setToasts(newToasts);
  }

  return (
    <ToastContext.Provider
      value={{ toasts, addToast, removeToast, ...delegated }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
