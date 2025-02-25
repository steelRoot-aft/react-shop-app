import React, { useEffect } from 'react';
import styles from './popUpCart.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem } from '../../redux/cartSlice';
import { Link } from 'react-router';

const PopUpCart = () => {
  const dispatch = useDispatch();
  const { items, total } = useSelector((state) => state.cart);

  const RemoveIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="25"
      height="25"
      viewBox="0 0 20 20"
      fill="none"
    >
      <path
        d="M16.2882 14.9617C16.4644 15.1378 16.5633 15.3767 16.5633 15.6258C16.5633 15.8749 16.4644 16.1137 16.2882 16.2898C16.1121 16.466 15.8733 16.5649 15.6242 16.5649C15.3751 16.5649 15.1362 16.466 14.9601 16.2898L9.99997 11.3281L5.03825 16.2883C4.86213 16.4644 4.62326 16.5633 4.37418 16.5633C4.12511 16.5633 3.88624 16.4644 3.71012 16.2883C3.534 16.1122 3.43506 15.8733 3.43506 15.6242C3.43506 15.3751 3.534 15.1363 3.71012 14.9602L8.67184 10L3.71168 5.03828C3.53556 4.86216 3.43662 4.62329 3.43662 4.37422C3.43662 4.12515 3.53556 3.88628 3.71168 3.71016C3.8878 3.53404 4.12668 3.43509 4.37575 3.43509C4.62482 3.43509 4.86369 3.53404 5.03981 3.71016L9.99997 8.67188L14.9617 3.70938C15.1378 3.53326 15.3767 3.43431 15.6257 3.43431C15.8748 3.43431 16.1137 3.53326 16.2898 3.70938C16.4659 3.8855 16.5649 4.12437 16.5649 4.37344C16.5649 4.62251 16.4659 4.86138 16.2898 5.0375L11.3281 10L16.2882 14.9617Z"
        fill="#000000"
      />
    </svg>
  );

  return (
    <div className={styles.body}>
      {items.length === 0 ? (
        <p>Корзина пустая</p>
      ) : (
        <ul className={styles.list}>
          {items.map((item, index) => (
            <li key={item.id} className={styles.block}>
              <Link to={`/product/${item.id}`}>
                <div className={styles.img}>
                  <img src={item.image} alt={item.title} />
                </div>
              </Link>
              <Link to={`/product/${item.id}`}>
                <div className={styles.info}>
                  <h4>
                    {item.title} x{item.count}
                  </h4>
                  <h6>${item.price}</h6>
                </div>
              </Link>
              <button onClick={() => dispatch(removeItem(index))}>
                <RemoveIcon />
              </button>
            </li>
          ))}
        </ul>
      )}
      <h5 className={styles.total}>Total: ${total}</h5>
    </div>
  );
};

export default PopUpCart;
