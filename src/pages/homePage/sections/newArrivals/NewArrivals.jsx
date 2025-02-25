import React, { useState } from 'react';
import styles from './NewArrivals.module.css';
import { useSelector } from 'react-redux';
import ProductCard from '../../../../components/productCard/ProductCard';

const NewArrivals = () => {
  const [visableCount, setVisableCount] = useState(4);

  const products = useSelector((state) => state.product.allProduct);

  return (
    <article className={styles.container}>
      <div className={styles.body}>
        <h2>NEW ARRIVALS</h2>
        <div className={styles.productBlock}>
          {products.slice(0, visableCount).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        <button
          className={styles.viewAll}
          onClick={() => setVisableCount(visableCount + 4)}
          style={{ display: visableCount >= products.length ? 'none' : '' }}
        >
          <h5>View All</h5>
        </button>
      </div>
    </article>
  );
};

export default NewArrivals;
