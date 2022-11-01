import { useState, useEffect } from 'react';
import styles from './Products.module.scss';
import { Product } from '../Product/Product';

export const Products = () => {
  const [productList, setProductList] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetch('https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c')
      .then((res) => res.json())
      .then((json) => setProductList(JSON.parse(json)));
  }, []);

  useEffect(() => {
    const totalStart = productList.reduce((acc, productItem) => acc + productItem.price, 0);
    setTotal(totalStart);
  }, [productList]);

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Выбранные товары:</h2>
      <div className={styles.items}>
        {productList.map((product) => (
          <Product
            id={product.id}
            name={product.name}
            price={product.price}
            img={product.img}
            type={product.type}
            setTotal={(value) => setTotal(total + value)}
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
