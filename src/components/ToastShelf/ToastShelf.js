import React from 'react';

import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf({ toasts, onCloseToast }) {
  return (
    <ol className={styles.wrapper}>
      {toasts.map((data) => {
        return (
          <li className={styles.toastWrapper} key={data.id}>
            <Toast
              shown
              onShownChange={() => onCloseToast(data.id)}
              variant={data.variant}
            >
              {data.message}
            </Toast>
          </li>
        );
      })}
    </ol>
  );

  // return (
  //   <ol className={styles.wrapper}>
  //     <li className={styles.toastWrapper}>
  //       <Toast shown variant="notice">
  //         Example notice toast
  //       </Toast>
  //     </li>
  //     <li className={styles.toastWrapper}>
  //       <Toast shown variant="error">
  //         Example error toast
  //       </Toast>
  //     </li>
  //   </ol>
  // );
}

export default ToastShelf;
