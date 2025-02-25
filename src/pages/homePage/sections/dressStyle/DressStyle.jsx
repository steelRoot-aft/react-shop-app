import React from 'react'
import styles from './dressStyle.module.css'
import { Link } from 'react-router';

const DressStyle = () => {

  const Column = ({ title, link }) => (
    <Link to={link} className={styles.column}>
      <section>
        <h3>{title}</h3>
      </section>
    </Link>
  );

  return (
    <article className={styles.container}>
      <div className={styles.body}>
        <h2>BROWSE BY dress STYLE</h2>
        <div className={styles.cards}>
          <div className={styles.topColumn}>
            <Column link="/" title="Casual" />
            <Column link="/" title="Formal" />
          </div>
          <div className={styles.bottomColumn}>
            <Column link="/" title="Party" />
            <Column link="/" title="Gym" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default DressStyle