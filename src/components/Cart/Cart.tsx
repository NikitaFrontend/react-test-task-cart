import styles from './Cart.module.scss';
import { Forms } from '../Forms/Forms';

export const Cart: React.FC = () => {
  return (
    <div className={styles.container}>
      <nav className={styles.navigation}>
        <a className={styles.linkMain} href="">
          Главная
        </a>
        <span className={styles.linkFlesh}>/</span>
        <a className={styles.linkCart} href="">
          Корзина
        </a>
      </nav>
      <h1 className={styles.title}> Корзина</h1>
      <div className={styles.blockAuthorization}>
        <span>Есть аккаунт? </span>
        <a className={styles.linkAuthorization} href="">
          Войти
        </a>
      </div>
      <Forms />
    </div>
  );
};
