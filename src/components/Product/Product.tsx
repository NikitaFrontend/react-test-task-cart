import { useState } from 'react';
import IconMinus from '../../assets/icon/IconMinus.svg';
import IconPlus from '../../assets/icon/IconPlus.svg';
import styles from './Product.module.scss';

type ProductType = {
  setTotal: (num: number) => void;
  price: number;
  id: string;
  img: string;
  name: string;
  type: string;
};

export const Product: React.FC<ProductType> = ({ setTotal, price, id, img, name, type }) => {
  const [amout, setAmmount] = useState(1);
  const [close, setClose] = useState(true);
  const handleDeleteProduct = () => {
    setTotal(-price * amout);
    setClose(false);
  };

  const handleChangeAmount = (minusOrPlus: any) => {
    if (minusOrPlus === 'minus') {
      if (amout <= 1) return;
      setAmmount((prev) => prev - 1);
      setTotal(-price);
    } else {
      setAmmount((prev) => prev + 1);
      setTotal(price);
    }
  };

  return (
    <>
      {close && (
        <div key={id} className={styles.item}>
          <div className={styles.blockImg}>
            <div className={styles.containerImg}>
              <img src={img} alt="" />
            </div>
          </div>

          <div className={styles.blockInfo}>
            <h3 className={styles.name}>{name}</h3>
            <div className={styles.type}>{type}</div>
            <div className={styles.counter}>
              <div className={styles.minus} onClick={() => handleChangeAmount('minus')}>
                <img src={IconMinus} alt="" />
              </div>
              <div className={styles.num}>{amout}</div>
              <div className={styles.plus} onClick={() => handleChangeAmount('plus')}>
                <img src={IconPlus} alt="" />
              </div>
            </div>
          </div>

          <div className={styles.blockPrice}>
            <div className={styles.price}>{price * amout}</div>
            <div className={styles.delete} onClick={() => handleDeleteProduct()}>
              удалить
            </div>
          </div>
        </div>
      )}
    </>
  );
};
