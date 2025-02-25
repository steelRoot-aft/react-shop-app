import React from 'react';
import styles from './main.module.css';
import { Link } from 'react-router';

import mainBgMibile from '../../../../assets/mainBgMobile.png'

const Main = () => {
  const BottomColumn = ({ number, title }) => (
    <div className={styles.column}>
      <h3>{title}</h3>
      <p>{number}</p>
    </div>
  );

  return (
    <article className={styles.container}>
      <div className={styles.body}>
        <section className={styles.top}>
          <h1>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <p>
            Browse through our diverse range of meticulously crafted garments,
            designed to bring out your individuality and cater to your sense of
            style.
          </p>
          <Link to="/categoryPage" className={styles.button}>
            <h5>Shop now</h5>
          </Link>
        </section>
        <section className={styles.bottom}>
          <BottomColumn title="200+" number="International Brands" />
          <BottomColumn title="2,000+" number="High-Quality Products" />
          <BottomColumn title="30,000+" number="Happy Customers" />
        </section>
        <div className={styles.bgMobile}>
          <img src={mainBgMibile} alt="mainBgMobile" />
        </div>
      </div>
    </article>
  );
};

export default Main;
