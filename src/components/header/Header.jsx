import React, { useEffect, useState } from 'react';
import styles from './header.module.css';
import { Link } from 'react-router';

import SearchInput from '../searchInput/SearchInput';
import PopUpCart from '../popUpCart/PopUpCart';
import Login from '../login/Login';

import arrow from '../../assets/arrowHeader.svg';
import cart from '../../assets/cartHeader.svg';
import login from '../../assets/loginHeader.svg';
import { useSelector } from 'react-redux';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenCart, setIsOpenCart] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [menuDropDown, setMenuDropDown] = useState(false);

  const countCart = useSelector(state => state.cart.countCart)

  const handleOpenCart = () => {
    setIsOpenCart(!isOpenCart);
    setIsOpenLogin(false);
  };

  const handleOpenLogin = () => {
    setIsOpenLogin(!isOpenLogin);
    setIsOpenCart(false);
  };

  const LinkHeader = ({ link, name }) => (
    <li>
      <Link to={link} className={styles.link}>
        {name}
      </Link>
    </li>
  );

  return (
    <header className={styles.container}>
      <div className={styles.body}>
        <Link to="/" className={styles.logo}>
          SHOP.CO
        </Link>
        <div
          className={`${styles.burger} ${isOpen ? styles.active : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
        <nav className={`${styles.menu} ${isOpen ? styles.active : ''}`}>
          <ul className={styles.list}>
            <li onClick={() => setMenuDropDown(!menuDropDown)}>
              Shop
              <img
                src={arrow}
                alt="arrow"
                style={{
                  transform: menuDropDown ? 'rotate(180deg)' : '',
                }}
              />
              <ul
                className={styles.menuDrop}
                style={{ display: menuDropDown ? '' : 'none' }}
              >
                <LinkHeader to='/' name='Shop1' />
                <LinkHeader to='/' name='Shop2' />
                <LinkHeader to='/' name='Shop3' />
              </ul>
            </li>
            <LinkHeader link="/categoryPage" name="On Sale" />
            <LinkHeader link="/categoryPage" name="New Arrivals" />
            <LinkHeader link="/categoryPage" name="Brands" />
          </ul>
        </nav>
        <div className={styles.inform}>
          <div className={styles.searchBlock}>
            <SearchInput />
          </div>
          <div className={styles.cartBlock}>
            <button onClick={handleOpenCart}>
              <img src={cart} alt="Cart" />
              <span>{countCart}</span>
            </button>
            {isOpenCart ? <PopUpCart /> : ''}
          </div>
          <div className={styles.loginBlock}>
            <button onClick={handleOpenLogin}>
              <img src={login} alt="login"></img>
            </button>
            {isOpenLogin ? <Login /> : ''}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
