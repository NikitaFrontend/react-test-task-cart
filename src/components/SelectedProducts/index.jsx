import React from 'react';
import styles from './SelectedProducts.module.scss';
import { Product } from '../Product';

export const SelectedProducts = () => {
  const [productArr, setProductArr] = React.useState([]);
  let totalSrtart = 0;
  const [total, setTotal] = React.useState(totalSrtart);

  React.useEffect(() => {
    fetch('https://run.mocky.io/v3/59f47e8e-2a09-48c3-8a1d-0af8e5817f7c')
      .then((res) => res.json())
      .then((json) => setProductArr(JSON.parse(json)));
  }, []);

  React.useEffect(() => {
    totalSrtart = productArr.reduce((a, item) => a + item.price, 0);
    setTotal(totalSrtart);
  }, [productArr]);

  return (
    <div className={styles.container}>
      {productArr.map((obj) => (
        <Product
          id={obj.id}
          name={obj.name}
          price={obj.price}
          img={obj.img}
          type={obj.type}
          setTotal={(e) => setTotal(total + e)}
        />
      ))}
      <div className={styles.total}>
        <div>Итог:</div>
        <div>{total}</div>
      </div>
    </div>
  );
};
