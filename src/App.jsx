import { BrowserRouter, Routes, Route, Link } from 'react-router';

import styles from './app.module.css';
import Home from './pages/homePage/Home';
import ProductDetailPage from './pages/productDetailPage/ProductDetail';
import CategoryPage from './pages/categoryPage/CategoryPage';
import CartPage from './pages/cartPage/CartPage';
import Header from './components/header/Header'
import Footer from './components/footer/Footer'


function App() {
  return (
    <>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Header />
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetailPage />} />
              <Route path="/categoryPage" element={<CategoryPage />} />
              <Route path="/cartPage" element={<CartPage />} />
            </Routes>
          </main>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
