import styles from './Input.module.scss';

export const Input = ({ type, name, value, onChange, label, error }) => {
  return (
    <div className={styles.inputBlock}>
      <div className={styles.error}>{error}</div>
      <input
        type={type}
        name={name}
        placeholder={label}
        value={value}
        onChange={onChange}
        className={`${styles.input} ${error !== undefined ? styles.inputActive : ''}`}
      />
      <label className={styles.inputLabel}>{label}</label>
    </div>
  );
};
