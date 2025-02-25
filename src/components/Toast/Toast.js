import React from 'react';
import {
  AlertOctagon,
  AlertTriangle,
  CheckCircle,
  Info,
  X,
} from 'react-feather';

import VisuallyHidden from '../VisuallyHidden';

import { ToastContext } from '../ToastProvider';

import styles from './Toast.module.css';

const ICONS_BY_VARIANT = {
  notice: Info,
  warning: AlertTriangle,
  success: CheckCircle,
  error: AlertOctagon,
};
const VALID_VARIANTS = Object.keys(ICONS_BY_VARIANT);

function Toast({ shown, onShownChange, variant, children }) {
  const { duration } = React.useContext(ToastContext);

  // make sure variant is a valid value
  if (typeof variant !== 'string' || !VALID_VARIANTS.includes(variant)) {
    throw new Error(
      `"${variant}" is an invalid variant; expected ${VALID_VARIANTS.toString()}`
    );
  }

  // Early Exit
  if (!shown) return;

  const VariantIcon = ICONS_BY_VARIANT[variant];

  return (
    <div className={`${styles.toast} ${styles[variant]}`}>
      <div className={styles.iconContainer}>
        <VariantIcon size={24} />
      </div>
      <p className={styles.content}>
        <VisuallyHidden>{variant} - </VisuallyHidden>
        {children}
      </p>
      <button
        className={styles.closeButton}
        onClick={() => onShownChange(false)}
        aria-label="Dismiss message"
        aria-live="off"
      >
        <X size={24} />
      </button>
    </div>
  );
}

export default Toast;
