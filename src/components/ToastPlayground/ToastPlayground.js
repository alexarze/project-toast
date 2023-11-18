import React from 'react';

import Button from '../Button';
import Toast from '../Toast';

import styles from './ToastPlayground.module.css';
import ToastShelf from '../ToastShelf/ToastShelf';

const VARIANT_OPTIONS = ['notice', 'warning', 'success', 'error'];

function ToastPlayground() {
  const [message, setMessage] = React.useState('');
  const [selectedVariant, setSelectedVariant] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const [showToast, setShowToast] = React.useState(false);
  const [toasts, setToasts] = React.useState([]);

  const refMessageInput = React.useRef();

  function handleSubmit(e) {
    e.preventDefault();

    // add toast
    const newToasts = [
      ...toasts,
      { message: message, variant: selectedVariant, id: crypto.randomUUID() },
    ];
    setToasts(newToasts);

    // reset form
    setMessage('');
    setSelectedVariant(VARIANT_OPTIONS[0]);
    refMessageInput.current.focus();
  }

  function removeToast(id) {
    const newToasts = toasts.filter((item) => {
      return item.id !== id;
    });
    setToasts(newToasts);
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      {/* <Toast
        shown={showToast}
        onShownChange={setShowToast}
        variant={selectedVariant}
      >
        {message}
      </Toast> */}

      <ToastShelf toasts={toasts} onCloseToast={removeToast} />

      <form className={styles.controlsWrapper} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: 'baseline' }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              required
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              ref={refMessageInput}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((variant) => {
              const id = `variant-${variant}`;
              return (
                <label htmlFor={id} key={id}>
                  <input
                    required
                    id={id}
                    type="radio"
                    name="variant"
                    value={variant}
                    checked={selectedVariant === variant}
                    onChange={(e) => setSelectedVariant(e.target.value)}
                  />
                  {variant}
                </label>
              );
            })}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button>Pop Toast!</Button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ToastPlayground;
