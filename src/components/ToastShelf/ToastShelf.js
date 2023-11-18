import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

import { ToastContext } from '../ToastProvider';

function ToastShelf() {
  const { toasts, removeToast } = React.useContext(ToastContext);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map((data) => {
        return (
          <li className={styles.toastWrapper} key={data.id}>
            <Toast
              shown
              onShownChange={() => removeToast(data.id)}
              variant={data.variant}
            >
              {data.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
