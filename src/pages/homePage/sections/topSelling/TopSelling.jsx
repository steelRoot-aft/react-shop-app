import React, { useState } from 'react';
import styles from './topSelling.module.css';
import { useSelector } from 'react-redux';
import ProductCard from '../../../../components/productCard/ProductCard';

const TopSelling = () => {
  const [visibleCount, setVisibleCount] = useState(4);

  const products = useSelector((state) => state.product.allProduct);

  return (
    <article className={styles.container}>
      <div className={styles.body}>
        <h2>top selling</h2>
        <div className={styles.productBlock}>
          {[...products]
            .sort(() => Math.random() - 1)
            .slice(0, visibleCount)
            .map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
        <button
          className={styles.viewAll}
          onClick={() => setVisibleCount(visibleCount + 4)}
          style={{ display: visibleCount >= products.length ? 'none' : '' }}
        >
          <h5>View All</h5>
        </button>
      </div>
    </article>
  );
};

export default TopSelling;
