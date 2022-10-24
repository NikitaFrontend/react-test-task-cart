import { useState } from 'react';
import { Up } from '../../assets/icon/IconUp.tsx';
import { Down } from '../../assets/icon/IconDown.tsx';
import styles from './DropDownList.module.scss';

export const DropDownList = ({ select, setSelect, error, removeSelectError }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [label, setLabel] = useState(false);

  const options = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 6'];

  return (
    <>
      <div className={styles.error}>{error}</div>
      <div className={styles.containerSelect}>
        <div
          className={`${styles.containerUp} ${
            error !== undefined ? styles.containerUpActive : ''
          }`}>
          <div>{select}</div>
          <div onClick={() => setOpenSelect(!openSelect)}>{openSelect ? <Down /> : <Up />}</div>
        </div>
        {openSelect && (
          <div className={styles.containerBottom}>
            {options.map((option, index) => (
              <div
                className={`${styles.item} ${activeIndex == index ? styles.active : ''}`}
                onClick={() => {
                  setActiveIndex(index);
                  setSelect(option);
                  setOpenSelect(false);
                  setLabel(true);
                  removeSelectError();
                }}>
                {option}
              </div>
            ))}
          </div>
        )}
        <div className={`${styles.label} ${label == true ? styles.labelActive : ''}`}>
          Тип упаковки
        </div>
      </div>
    </>
  );
};
