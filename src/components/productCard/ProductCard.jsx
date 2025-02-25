import React from 'react';
import styles from './productCard.module.css';
import { Link } from 'react-router';

const ProductCard = ({ product }) => {
  const RaitingStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="17"
      viewBox="0 0 19 17"
      fill="none"
    >
      <path
        d="M9.24494 0.255005L11.8641 5.89491L18.0374 6.6431L13.4829 10.8769L14.679 16.9793L9.24494 13.956L3.8109 16.9793L5.00697 10.8769L0.452479 6.6431L6.62573 5.89491L9.24494 0.255005Z"
        fill="#FFC633"
      />
    </svg>
  );
  const HalfRaitingStar = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="9"
      height="17"
      viewBox="0 0 9 17"
      fill="none"
    >
      <path
        d="M3.56594 16.9793L8.99998 13.956V0.255005L6.38077 5.89491L0.20752 6.6431L4.76201 10.8769L3.56594 16.9793Z"
        fill="#FFC633"
      />
    </svg>
  );

  const newCountStar = () => {
    const rating = product.raiting;
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(<RaitingStar key={stars.length} />);
    }

    if (halfStar) {
      stars.push(<HalfRaitingStar key={stars.length} />);
    }

    return <span>{stars}</span>;
  };

  return (
    <section className={styles.body}>
      <Link to={`/product/${product.id}`} className={styles.block}>
        <div className={styles.img}>
          <img src={product.image} alt={product.title} />
        </div>
        <div className={styles.info}>
          <h4 className={styles.title}>{product.title}</h4>
          <p className={styles.rating}>
            {newCountStar()} {product.raiting}/5
          </p>
        </div>
        <div className={styles.priceInfo}>
          <h6 className={styles.price}>${product.price}</h6>
          {product.sale ? (<div>
            <h6 className={styles.sale}>${product.sale}</h6>
          <span>{product.saleProcent}</span>
          </div>) : ''}
        </div>
      </Link>
    </section>
  );
};

export default ProductCard;
