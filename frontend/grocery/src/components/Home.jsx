// Home.jsx

import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { fetchProducts } from '../redux/actions';
import ProductCards from './ProductCards';
import Registration from './Registration';
import Login from './Login';
import StaticCards from './StaticCards';
import Catagories from './Catagories';

function Home({ products, fetchProducts }) {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const openRegistrationModal = () => {
    setIsRegistrationModalOpen(true);
  };

  const openLoginModal = () => {
    setIsLoginModalOpen(true);
  };

  const closeModals = () => {
    setIsRegistrationModalOpen(false);
    setIsLoginModalOpen(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <div>
      <Header
        openLoginModal={openLoginModal}
        openRegistrationModal={openRegistrationModal}
      />
      <div className="main-content">
        <StaticCards/>
        <Catagories />
        <ProductCards products={products} />
      </div>

      {isRegistrationModalOpen && <Registration onClose={closeModals} />}
      {isLoginModalOpen && <Login onClose={closeModals} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
  };
};

const mapDispatchToProps = (dispatch) => ({
  fetchProducts: () => dispatch(fetchProducts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
