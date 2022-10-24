import styles from './Header.module.scss';
import { IconSearch } from '../../assets/icon/IconSearch.tsx';
import { IconProfile } from '../../assets/icon/IconProfile.tsx';
import { IconCart } from '../../assets/icon/IconCart.tsx';
import { IconLike } from '../../assets/icon/IconLike.tsx';
import { IconLogo } from '../../assets/icon/IconLogo.tsx';
import { IconBurger } from '../../assets/icon/IconBurger.tsx';
import { IconAdaptiveLogo } from '../../assets/icon/IconAdaptiveLogo.tsx';
export const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.up}>
        <div className={styles.search}>
          <div className={styles.iconBurger}>
            <IconBurger />
          </div>
          <div>
            <IconSearch />
          </div>
          <div className={styles.inputBlock}>
            <input className={`${styles.input} ${styles.active}`} placeholder="Поиск" />
            <label className={styles.inputLabel}>Поиск</label>
          </div>
        </div>
        <div className={styles.adaptiveLogo}>
          <IconAdaptiveLogo />
        </div>
        <nav className={styles.upMenu}>
          <ul className={styles.upList}>
            <li className={styles.active}>
              <a className={styles.upLink} href="">
                <IconProfile />
              </a>
            </li>
            <li>
              <a className={styles.upLink} href="">
                <IconLike />
              </a>
            </li>
            <li>
              <a className={styles.upLink} href="">
                <IconCart />
              </a>
            </li>
          </ul>
        </nav>
      </div>

      <div className={`${styles.bottom} ${styles.active}`}>
        <nav className={styles.bottomMenu}>
          <ul className={styles.bottomList}>
            <li>
              <a className={styles.bottomLink} href="">
                СТРАНИЦА 1
              </a>
            </li>
            <li>
              <a className={styles.bottomLink} href="">
                СТРАНИЦА 2
              </a>
            </li>
            <li>
              <a className={styles.bottomLink} href="">
                СТРАНИЦА 3
              </a>
            </li>
          </ul>
          <div className={styles.logo}>
            <IconLogo />
          </div>
          <ul className={styles.bottomList}>
            <li>
              <a className={styles.bottomLink} href="">
                СТРАНИЦА 4
              </a>
            </li>
            <li>
              <a className={styles.bottomLink} href="">
                СТРАНИЦА 5
              </a>
            </li>
            <li>
              <a className={styles.bottomLink} href="">
                СТРАНИЦА 6
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};
