import React from 'react';
import styles from './home.module.css';
// import { useSelector } from 'react-redux';
import ProductCard from '../../components/productCard/ProductCard';

// Main
import Main from './sections/mainSection/Main'
// Brand Banner
import Banner from './sections/brandBanner/Banner'
// New Arrivals
import NewArrivals from './sections/newArrivals/NewArrivals'
// Top Selling
import TopSelling from './sections/topSelling/TopSelling'
// Browse By Dress STYLE
import DressStyle from './sections/dressStyle/DressStyle'
// Our Happy Customers
import Reviews from './sections/reviews/Reviews'

const Home = () => {
  // const products = useSelector((state) => state.product.allProduct);

  return (
    <main className={styles.main}> 
      <Main />
      <Banner />
      <NewArrivals />
      <TopSelling />
      <DressStyle />
      <Reviews />
    </main>
  );
};

export default Home;
