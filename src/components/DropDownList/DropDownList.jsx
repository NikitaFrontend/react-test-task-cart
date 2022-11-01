import { useState } from 'react';
import Up from '../../assets/icon/IconUp.svg';
import Down from '../../assets/icon/IconDown.svg';
import styles from './DropDownList.module.scss';

export const DropDownList = ({ select, setSelect, error, removeSelectError }) => {
  const [openSelect, setOpenSelect] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const [label, setLabel] = useState(false);

  const options = ['Пункт 1', 'Пункт 2', 'Пункт 3', 'Пункт 4', 'Пункт 5', 'Пункт 6'];

  const onClickList = (option, index) => {
    setActiveIndex(index);
    setSelect(option);
    setOpenSelect(false);
    setLabel(true);
    removeSelectError();
  };

  return (
    <>
      <div className={styles.error}>{error}</div>
      <div className={styles.containerSelect}>
        <div
          className={`${styles.containerUp} ${
            error !== undefined ? styles.containerUpActive : ''
          }`}>
          <div>{select}</div>
          <div onClick={() => setOpenSelect(!openSelect)}>
            <img src={openSelect ? Down : Up} alt="" />
          </div>
        </div>
        {openSelect && (
          <div className={styles.containerBottom}>
            {options.map((option, index) => (
              <div
                className={`${styles.item} ${activeIndex === index ? styles.active : ''}`}
                onClick={() => {
                  onClickList(option, index);
                }}>
                {option}
              </div>
            ))}
          </div>
        )}
        <div className={`${styles.label} ${label ? styles.labelActive : ''}`}>Тип упаковки</div>
      </div>
    </>
  );
};
