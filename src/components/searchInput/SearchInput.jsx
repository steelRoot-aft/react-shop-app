import React, { useEffect, useState } from 'react';
import styles from './searchInput.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchQuery } from '../../redux/productSlice';
import { Link } from 'react-router';

import search from '../../assets/searchHeader.svg';
import searchBlack from '../../assets/searchHeaderBlack.png';


const SearchInput = () => {
  const [isOpenSearch, setIsOpenSearch] = useState(false);
  const dispatch = useDispatch();

  const tableResponse = window.innerWidth;

  const { allProduct, searchQuery } = useSelector((state) => state.product);

  // Флильтрация товаров
  const searchProduct = searchQuery
    ? allProduct.filter((product) =>
        product.title.toLowerCase().includes(searchQuery.toLowerCase()),
      )
    : false;

      useEffect(() => {
        if (isOpenSearch) {
          document.body.style.overflow = 'hidden'
        } else {
          document.body.style.overflow = '';
        }
      }, [isOpenSearch])


  return (
    <div className={styles.body}>
      <form className={styles.search}>
        <button
          type="button"
          onClick={
            tableResponse <= 767 ? () => setIsOpenSearch(!isOpenSearch) : null
          }
        >
          {tableResponse <= 767 ? (
            <img src={searchBlack} alt="search" />
          ) : (
            <img src={search} alt="search" />
          )}
        </button>
        <input
          className={isOpenSearch ? styles.active : ''}
          placeholder="Search for products..."
          type="search"
          value={searchQuery}
          onChange={(e) => dispatch(setSearchQuery(e.target.value))}
        />
      </form>
      <div className={styles.result}>
        {searchProduct.length > 0 ? (
          <ul className={styles.list}>
            {searchProduct.map((product) => (
              <li key={product.id}>
                <Link to={`/product/${product.id}`} className={styles.block}>
                  <div className={styles.img}>
                    <img src={product.image} alt={product.title} />
                  </div>
                  <div className={styles.info}>
                    <h4>{product.title}</h4>
                    <h6>${product.price}$</h6>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          ''
        )}
      </div>
    </div>
  );
};

export default SearchInput;
