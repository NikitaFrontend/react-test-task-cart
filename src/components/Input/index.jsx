import styles from './Input.module.scss';
import React from 'react';

export const Input = ({ type, name, value, onChange, input, label, formErrors }) => {
  return (
    <div className={styles.inputBlock}>
      <input
        type={type}
        name={name}
        placeholder=" "
        value={value}
        onChange={onChange}
        className={styles.input}
      />
      <label className={styles.inputLabel}>{label}</label>
      <p>{formErrors}</p>
    </div>
  );
};
