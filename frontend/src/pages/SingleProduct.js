import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { useParams, useHistory } from 'react-router-dom';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Rating from '../components/Rating';
import { detailsProduct, saveProductReview } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';
import { PRODUCT_REVIEW_SAVE_RESET } from '../constants/productConstants';

const SingleProduct = () => {
  // Review submit state
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  // data from redux store
  const productDetails = useSelector((state) => state.productDetails);
  const userSignin = useSelector((state) => state.userSignin);
  const productReviewSave = useSelector((state) => state.productReviewSave);
  const cart = useSelector((state) => state.cart);

  // destructuring variable
  const { cartItems } = cart;
  const { success: productSaveSuccess } = productReviewSave;
  const { product, loading } = productDetails;
  const { userInfo } = userSignin;
  // ready the dispatch function
  const dispatch = useDispatch();
  const params = useParams();
  const history = useHistory();

  console.log(product);

  useEffect(() => {
    if (productSaveSuccess) {
      alert('Review submitted successfully.');
      setRating(0);
      setComment('');
      dispatch({ type: PRODUCT_REVIEW_SAVE_RESET });
    }
    // dispatch the function folder action in productAction
    dispatch(detailsProduct(params.id));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [productSaveSuccess, cartItems]);

  // Add to cart function
  const addcart = (item) => {
    // dispatch the function folder action in cartAction
    dispatch(addToCart(params.id, item));
    history.push('/addtocart');
  };

  // create revieew
  const createReview = (e) => {
    e.preventDefault();
    // dispatch the function folder action in productAction
    dispatch(
      saveProductReview(params.id, {
        name: `${userInfo.firstName} ${userInfo.lastName}`,
        rating: rating,
        comment: comment,
      })
    );
  };

  return (
    <>
      <Navbar />
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
      <div className="container">
        <div className="card main-card">
          <div className="container-fliud">
            <div className="wrapper row">
              {loading ? (
                <h1>Loading</h1>
              ) : (
                <>
                  {product && (
                    <>
                      <div className="preview col-md-6">
                        <div className="preview-pic tab-content">
                          <div className="tab-pane active" id="pic-1">
                            <img
                              src={`/${product.image}`}
                              alt=""
                            />
                          </div>
                        </div>
                      </div>
                      <div className="details col-md-6">
                        <h3 className="product-title">{product.name}</h3>
                        <div className="rating">
                          <Rating
                            value={product.rating}
                            text={product.numReviews + ' reviews'}
                          />
                          <span className="review-no">
                            {product.numReviews} reviews
                          </span>
                        </div>
                        <div className="rating-text" style={{color:'green'}} >
                          <p>
                            Status:{' '}
                            {product.countInStock > 0
                              ? 'In Stock'
                              : 'Unavailable.'}
                          </p>
                        </div>
                        <p
                          dangerouslySetInnerHTML={{
                            __html: product.description,
                          }}
                          className="product-description"
                        ></p>
                        <h4 className="price text-dark">
                          Current Price: <span>${product.price}</span>
                        </h4>
                        <div className="action">
                          <button
                            className="add-to-cart btn btn-default text-dark"
                            type="button"
                            onClick={addcart}
                          >
                            {cartItems.findIndex((item) => {
                              return item.product === product._id;
                            }) === -1
                              ? 'Add to cart'
                              : 'Product added'}
                          </button>
                          <Link
                            className="like btn btn-default ml-2 mt-2 "
                            type="button"
                            to="/"
                          >
                            Go back
                          </Link>
                        </div>
                      </div>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="container pt-5 pb-5" >
        {userInfo && (
          <>
            <h2 className="text-center"> Add Review</h2>
            <form  style={{width:'500px',marginLeft:'300px'}}>
              <div className="form-group">
                <label htmlFor="comment">Comment</label>
                <textarea
                  name="comment"
                  className="form-control"
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                ></textarea>
              </div>
              <div className="form-group">
                <label htmlFor="rating">Rating</label>
                <select
                  name="rating"
                  id="rating"
                  className="form-control"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                >
                  <option value="1">1- Poor</option>
                  <option value="2">2- Fair</option>
                  <option value="3">3- Good</option>
                  <option value="4">4- Very Good</option>
                  <option value="5">5- Excelent</option>
                </select>
              </div>
              <button
                onClick={createReview}
                className="btn btn-block btn-secondary"  style={{width:'150px',marginLeft:'150px'}}
              >
                Add Review  
              </button>
            </form>
          </>
        )}
      </div>
      <div className="container pt-4 pb-4" style={{marginLeft:'550px'}} >
        <h1 className="co">Comments</h1>

        {loading ? (
          <h1>Loading</h1>
        ) : (
          product.reviews.map((item) => (
            <React.Fragment key={item._id}>
              <h3>{item.name}</h3>
              <Rating value={item.rating} />
              <p>{item.comment}</p>
            </React.Fragment>
          ))
        )}
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
