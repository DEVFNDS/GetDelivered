import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import Header from './Header';
import { fetchProducts } from '../redux/actions';
import ProductCards from './ProductCards';

function Home({products, fetchProducts}) {
    useEffect(() => {
        fetchProducts();
      }, [fetchProducts]);
    console.log(products)
    return(
        <div>
            <Header/>
            <div className="main-content">
                <ProductCards products={products} />   
            </div>       
            
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
