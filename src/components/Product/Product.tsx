import IconMinus from '../../assets/icon/IconMinus.svg';
import IconPlus from '../../assets/icon/IconPlus.svg';
import styles from './Product.module.scss';
import { clearItem, increase, decrease } from '../../redux/slice/products';
import { useDispatch } from 'react-redux';

type ProductType = {
  price: number;
  id: string;
  img: string;
  name: string;
  type: string;
  amount: number;
};

export const Product: React.FC<ProductType> = ({ price, id, img, name, type, amount }) => {
  const dispatch = useDispatch();

  return (
    <>
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
            <div
              className={styles.minus}
              onClick={() => {
                if (amount === 1) {
                  dispatch(clearItem(id));
                  return;
                }
                dispatch(decrease(id));
              }}>
              <img src={IconMinus} alt="" />
            </div>
            <div className={styles.num}>{amount}</div>
            <div className={styles.plus} onClick={() => dispatch(increase(id))}>
              <img src={IconPlus} alt="" />
            </div>
          </div>
        </div>

        <div className={styles.blockPrice}>
          <div className={styles.price}>{price}</div>

          <div className={styles.delete} onClick={() => dispatch(clearItem(id))}>
            удалить
          </div>
        </div>
      </div>
    </>
  );
};
