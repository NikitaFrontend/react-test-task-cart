import React, { useEffect } from 'react';
import { IconMinus } from './IconMinus.tsx';
import { IconPlus } from './IconPlus.tsx';
import styles from './Product.module.scss';

export const Product = (props) => {
  const [ammout, setAmmount] = React.useState(1);
  const [close, setClose] = React.useState(true);

  const onClickDelete = () => {
    props.setTotal(-props.price * ammout);
    setClose(false);
  };

  const onCklick = (type) => {
    if (type === 'minus') {
      if (ammout <= 1) return;
      setAmmount((prev) => prev - 1);
      props.setTotal(-props.price);
    } else {
      setAmmount((prev) => prev + 1);
      props.setTotal(props.price);
    }
  };

  return (
    <>
      {close && (
        <div key={props.id} className={styles.item}>
          <div className={styles.blockImg}>
            <div className={styles.containerImg}>
              <img src={props.img} alt="" />
            </div>
          </div>

          <div className={styles.blockInfo}>
            <h3 className={styles.name}>{props.name}</h3>
            <div className={styles.type}>{props.type}</div>
            <div className={styles.counter}>
              <div className={styles.minus} onClick={() => onCklick('minus')}>
                <IconMinus />
              </div>
              <div className={styles.num}>{ammout}</div>
              <div className={styles.plus} onClick={() => onCklick('plus')}>
                <IconPlus />
              </div>
            </div>
          </div>

          <div className={styles.blockPrice}>
            <div className={styles.price}>{props.price * ammout}</div>
            <div className={styles.delete} onClick={() => onClickDelete()}>
              удалить
            </div>
          </div>
        </div>
      )}
    </>
  );
};
