import React from 'react'
import styles from './banner.module.css'

// Brand Logo
import versace from '../../../../assets/versace.svg'
import zara from '../../../../assets/zara.svg'
import gucci from '../../../../assets/gucci.svg'
import prada from '../../../../assets/prada.svg'
import cK from '../../../../assets/cK.svg'

const Banner = () => {
  return (
    <article className={styles.container}>
      <div className={styles.body}>
        <div className={styles.column}>
          <img src={versace} alt="versace" />
        </div>
        <div className={styles.column}>
          <img src={zara} alt="zara" />
        </div>
        <div className={styles.column}>
          <img src={gucci} alt="gucci" />
        </div>
        <div className={styles.column}>
          <img src={prada} alt="prada" />
        </div>
        <div className={styles.column}>
          <img src={cK} alt="cK" />
        </div>
      </div>
    </article>
  );
}

export default Banner