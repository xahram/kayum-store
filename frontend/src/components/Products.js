import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Favorite, FavoriteBorder, Visibility } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import { listProducts, discountProducts } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

const Products = (props) => {
  // name state
  const [name, setName] = useState('New Arrivals');
  // getting the product from redux
  const productList = useSelector((state) => state.productList);
  // destructuring the variable
  const { products, loading } = productList;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

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
      <section className="new">
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h1 className="h2 arrivals">{name}</h1>
              <div className="line"></div>
            </div>
            <div className="col-md-8">
              <ul className="d-sm-block d-lg-flex simple">
                <li>
                  <Link
                    to="#"
                    className="text-center"
                    onClick={() => {
                      dispatch(listProducts());
                      setName('New Products');
                    }}
                  >
                    New Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="text-center"
                    onClick={() => {
                      dispatch(discountProducts());
                      setName('Discount Products');
                    }}
                  >
                    Discount Products
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row pt-lg-5">
            {loading ? (
              <h1>Workings</h1>
            ) : (
              productList &&
              // lopp the products
              products.map((product) => (
                <div key={product._id} className="col-lg-3 col-md-4 col-sm-12">
                  <div className="card mb-4 card-pos" style={{ width: '100%' }}>
                    <>
                      <img
                        src={`/${product.image}`}
                        height="200"
                        width="200"
                        className="card-img-top p-1"
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
                        <h5 className="card-text title">
                          <Link
                            className="single-link"
                            to={`/products/single/${product._id}`}
                          >
                            {product.name}
                          </Link>
                        </h5>
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
                        onClick={() => addcart(product._id, 1)}
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
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default Products;
