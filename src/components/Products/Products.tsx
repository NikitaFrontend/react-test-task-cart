import { useEffect } from 'react';
import styles from './Products.module.scss';
import { Product } from '../Product/Product';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts, calculateTotals } from '../../redux/slice/products';

export const Products: React.FC = () => {
  const dispatch = useDispatch();
  //@ts-ignore
  const { items, total } = useSelector((state) => state.products);
  console.log(total);
  const getPizzas = async () => {
    //@ts-ignore
    dispatch(fetchProducts());
  };
  useEffect(() => {
    getPizzas();
  }, []);

  useEffect(() => {
    dispatch(calculateTotals());
  }, [items]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Выбранные товары:</h2>
      <div className={styles.items}>
        {items.map((product: any) => (
          <Product
            amount={product.amount}
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            type={product.type}
          />
        ))}
      </div>
      <div className={styles.total}>
        <div>Итог:</div>
        <div>{total}</div>
      </div>
    </div>
  );
};
