import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { IconButton } from '@material-ui/core';
import { Favorite, FavoriteBorder, Visibility } from '@material-ui/icons';
import { listProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const ShopProducts = () => {
  // getting the product from redux
  const productList = useSelector((state) => state.productList);

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // destructuring the variable
  const { products, loading } = productList;

  // dispatch the mathod the inthe action
  const dispatch = useDispatch();

  // React lifecyle method
  useEffect(() => {
    // dispatch the listProducts in products action
    dispatch(listProducts());
    return () => {
      ///
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cartItems]);

  // add to cart function
  const addcart = (id, items) => {
    // dispatvh the function cartAction file
    dispatch(addToCart(id, items));
  };
  return (
    <>
      <section className="faq">
        <div className="container">
          <div className="faq-flex">
            {/* <h4>www.kuyam.store</h4> */}
            <h4>Choose Earthenware for Healthy Cooking...!</h4>
            <h4>www.kuyam.store</h4>
            <p>
          
              {/* <Link className="text-white-50" to="/">
              <i class="fas fa-home" style={{color:'#fff',fontSize:'20px'}}></i>
              </Link>{' '} */}
              <Link className="text-white-50" to=""> 
              <i class="fas fa-envelope" style={{color:'#fff',fontSize:'20px',fontStyle:'italic'}}>   info@kuyam.store</i>
              </Link>{' '}
            
            </p>
          </div>
        </div>
      </section> 
      <section className="new" style={{backgroundColor:'#ffffff'}}>
        <div className="container">
          <div className="row pt-lg-5">
            {loading ? (
              <h1>Workings</h1>
            ) : products.length !== 0 ? (
              // lopp the products
              products.map((product) => (
                <div key={product._id} className="col-lg-3 col-md-4 col-sm-12">
                  <div className="card mb-4 card-pos" style={{ width: '100%' }}>
                    <>
                      <img
                        src={`${product.image}`}
                        className="card-img-top p-1"
                        height="200"
                        width="200"
                        alt=""
                      />
                      <div className="card-overlay">
                        <div className="card-overlay-item">
                          <IconButton
                            style={{ background: '#f7f7f7', margin: '0 10px' }}
                            onClick={() => {
                              addcart(product._id, 1);
                            }}
                          >
                            {cartItems.findIndex((item) => {
                              return item.product === product._id;
                            }) === -1 ? (
                              <FavoriteBorder />
                            ) : (
                              <Favorite />
                            )}
                          </IconButton>
                          <Link
                            style={{
                              background: '#f7f7f7',
                              margin: '0 10px',
                              padding: '1rem',
                              borderRadius: '50%',
                            }}
                            to={`/products/single/${product._id}`}
                          >
                            <Visibility />
                          </Link>
                        </div>
                      </div>
                      <div className="card-body">
                        <h4 className="card-text title">
                          <Link
                            className="single-link"
                            to={`/products/single/${product._id}`}
                          ></Link>
                          {product.name}
                        </h4>
                        <p className="card-text sub-title">
                          {product.category}
                        </p>
                        <p className="card-text text-warning">
                          $ {product.price.toFixed(2)}
                        </p>
                        {product.discount && (
                          <p>
                            Real Price:{' '}
                            <strike className="text-dark">
                              ${product.realPrice}
                            </strike>
                          </p>
                        )}
                        {product.discount && (
                          <p className="bg-warning text-secondary p-2 card-p">
                            {product.amountOfDiscount}%
                          </p>
                        )}
                      </div>
                    </>
                    <div className="card-footer">
                      <button
                        onClick={() => {
                          addcart(product._id, 1);
                        }}
                        className="btn btn-outline-warning"
                      >
                        {cartItems.findIndex((item) => {
                          return item.product === product._id;
                        }) === -1
                          ? 'Add to cart'
                          : 'Product added'}
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1>No Product found</h1>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopProducts;
