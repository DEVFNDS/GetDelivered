// Home.jsx

import React, { useState } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import ProductCards from './ProductCards';
import Registration from './Registration';
import Cart from './Cart';
import Login from './Login';
import StaticCards from './StaticCards';
import Catagories from './Catagories';

function Home({ products, cart, loginDetails}) {
  const [isRegistrationModalOpen, setIsRegistrationModalOpen] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

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

  const openCart = () => {
    setIsCartOpen(true);
  }
  const closeCart = () => {
    setIsCartOpen(false);
  }

  console.log("products from home", products);
  console.log("cart from home", cart);

  return (
    <div>
      <Header
        openLoginModal={openLoginModal}
        openRegistrationModal={openRegistrationModal}
        openCart={openCart}
        count={cart && cart.length}
        loginDetails={loginDetails}
      />
      {isCartOpen && <Cart closeCart={closeCart} cart={cart}/> }
      <div className="main-content">
        {Object.keys(products).length === 0 &&
          <>
            <StaticCards/>
            <Catagories />
          </>
        }
        {products && products.data && 
          <ProductCards products={products} cart={cart} />
        }
      </div>

      {isRegistrationModalOpen && <Registration onClose={closeModals} />}
      {isLoginModalOpen && <Login onClose={closeModals} />}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart,
    loginDetails: state.loginDetails
  };
};



export default connect(mapStateToProps, null)(Home);
