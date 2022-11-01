import styles from './Header.module.scss';
import IconSearch from '../../assets/icon/IconSearch.svg';
import IconProfile from '../../assets/icon/IconProfile.svg';
import IconCart from '../../assets/icon/IconCart.svg';
import IconLike from '../../assets/icon/IconLike.svg';
import IconLogo from '../../assets/icon/IconLogo.svg';
import IconBurger from '../../assets/icon/IconBurger.svg';
import IconAdaptiveLogo from '../../assets/icon/IconAdaptiveLogo.svg';
export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.up}>
        <div className={styles.search}>
          <div className={styles.iconBurger}>
            <img src={IconBurger} alt="" />
          </div>
          <div>
            <img src={IconSearch} alt="" />
          </div>
          <div className={styles.inputBlock}>
            <input className={`${styles.input} ${styles.active}`} placeholder="Поиск" />
            <label className={styles.inputLabel}>Поиск</label>
          </div>
        </div>
        <div className={styles.adaptiveLogo}>
          <img src={IconAdaptiveLogo} alt="" />
        </div>
        <nav className={styles.upMenu}>
          <ul className={styles.upList}>
            <li className={styles.active}>
              <a className={styles.upLink} href="">
                <img src={IconProfile} alt="" />
              </a>
            </li>
            <li>
              <a className={styles.upLink} href="">
                <img src={IconLike} alt="" />
              </a>
            </li>
            <li>
              <a className={styles.upLink} href="">
                <img src={IconCart} alt="" />
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
            <img src={IconLogo} alt="" />
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
