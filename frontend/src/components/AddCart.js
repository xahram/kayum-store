import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Close } from '@material-ui/icons';
import { IconButton } from '@material-ui/core';
import axios from 'axios';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import { addToCart, removeFromCart } from '../actions/cartActions';

const countryShippingPrices = [
  { name: 'Sri Lanka', price: '1.09', currency: 'rupess' },
  { name: 'india', price: '1.05', currency: 'rupess' },
  { name: 'Canada', price: '1.33', currency: 'candian' },
  { name: 'America', price: '30', currency: '$' },
  { name: 'London', price: '51.00', currency: '£' },
  { name: 'France', price: '23.44', currency: '€' },
  { name: 'German', price: '23.44', currency: '€' },
  { name: 'Swiss', price: '32.57', currency: 'Sw' },
  { name: 'Australia', price: '21.48', currency: 'Au$' },
];

const AddCart = () => {
  // States for add to cart
  //no-unused-var
  const [quantity, setQuantity] = useState(0);
  const [country, setCountry] = useState('');
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    getCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCountry = async () => {
    const data = await axios.get('http://ip-api.com/json');
    setCountry(data.data.country);
  };

  // select user info from redux
  const userSignin = useSelector((state) => state.userSignin);
  // dispatch events
  const dispatch = useDispatch();
  // push history
  const history = useHistory();
  // get data
  const { cartItems } = cart;
  const { userInfo } = userSignin;

  // call the function remove to cart
  const removeAddToCart = (productId) => {
    // this functiion is located in cartAction.js
    dispatch(removeFromCart(productId));
  };

  // this function process the next payments
  const proccessPayment = () => {
    if (!userInfo) {
      // go to login page
      history.push('/login');
    }
    // go to payment confirm page
    history.push('/paymentconfirm');
  };

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);
  // const shippingPrice = itemsPrice > 100 ? 25 : 20;
  // const taxPrice = 0.15 * itemsPrice;
  // const totalPrice = itemsPrice + shippingPrice;

  let calculatedPrice;
  let totalPrices;
  const value = countryShippingPrices.findIndex(
    (item) => item.name === country
  );

  const newValue = countryShippingPrices[value];

  let prices;
  let allPrice = [];
  let sum = 0;
  if (newValue !== undefined) {
    calculatedPrice = newValue.price;
    totalPrices = Number(calculatedPrice) + Number(itemsPrice);

    cartItems.map((item) => {
      const numbervalue = Number(item.qty);
      if (numbervalue === 1 || numbervalue <= 3) {
        prices = Number(calculatedPrice);
        allPrice.push(prices);
      } else if (numbervalue === 4 || numbervalue <= 6) {
        prices = Number(calculatedPrice) * 2;
        allPrice.push(prices);
      } else if (numbervalue === 7 || numbervalue <= 9) {
        prices = Number(calculatedPrice) * 3;
        allPrice.push(prices);
      } else if (numbervalue === 10 || numbervalue <= 12) {
        prices = Number(calculatedPrice) * 4;
        allPrice.push(prices);
      } else if (numbervalue === 13 || numbervalue <= 15) {
        prices = Number(calculatedPrice) * 6;
        allPrice.push(prices);
      } else if (numbervalue === 16 || numbervalue <= 18) {
        prices = Number(calculatedPrice) * 7;
        allPrice.push(prices);
      } else if (numbervalue === 17 || numbervalue <= 19) {
        prices = Number(calculatedPrice) * 8;
        allPrice.push(prices);
      } else if (numbervalue === 20 || numbervalue <= 22) {
        prices = Number(calculatedPrice) * 9;
        allPrice.push(prices);
      } else {
        prices = Number(calculatedPrice) * 10;
        allPrice.push(prices);
      }
      return prices;
    });

    allPrice.map((item) => {
      sum = sum + item;
      return sum;
    });

    // if (cartItems.length === 1 || cartItems.length <= 3) {
    //   // eslint-disable-next-line
    //   calculatedPrice = calculatedPrice;
    // } else if (cartItems.length === 4 || cartItems.length <= 6) {
    //   console.log(calculatedPrice);
    //   calculatedPrice = calculatedPrice * 2;
    //   // eslint-disable-next-line
    // } else if (cartItems.length === 7 || cartItems.length <= 9) {
    //   calculatedPrice = calculatedPrice * 3;
    //   // eslint-disable-next-line
    // } else if (cartItems.length === 10 || cartItems.length <= 12) {
    //   calculatedPrice = calculatedPrice * 4;
    //   // eslint-disable-next-line
    // } else if (cartItems.length === 13 || cartItems.length <= 15) {
    //   calculatedPrice = calculatedPrice * 5;
    //   // eslint-disable-next-line
    // } else if (cartItems.length === 16 || cartItems.length <= 18) {
    //   calculatedPrice = calculatedPrice * 6;
    //   // eslint-disable-next-line
    // } else if (cartItems.length === 19 || cartItems.length <= 21) {
    //   calculatedPrice = calculatedPrice * 7;
    //   // eslint-disable-next-line
    // } else {
    //   calculatedPrice = calculatedPrice * 8;
    //   // eslint-disable-next-line
    // }
  }

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
      
      <section className="cart mt-5 " >
        <div className="add-box" style={{border:'8px #eeeeee solid',width:'1200px',marginLeft:'75px',marginBottom:'100px',fontFamily:'Poppins',fontSize:'18px'}}>
        <div className="container-addto" style={{backgroundColor:'#ffffff'}}>
          <table className="table table-borderless" >
            <thead>
              <tr>
                {/* eslint-disable-next-line */}
                <td scope="col" />
                {/* eslint-disable-next-line */}
                <th scope="col" />
                <th scope="col">PRODUCT</th>
                <th scope="col">PRICE</th>
                <th scope="col">QUANTITY</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cart) => {
                return (
                  <tr key={cart.product}>
                    <td>
                      <IconButton onClick={() => removeAddToCart(cart.product)}>
                        <Close color="action" />
                      </IconButton>
                    </td>
                    <td>
                      <img
                        src={`/${cart.image}`}
                        width="90"
                        height="190"
                        className="img-fluid"
                        alt=""
                      />
                    </td>
                    <td>{cart.name}</td>
                    <td>${cart.price.toFixed(2)}</td>
                    <td>
                      <select
                        className="custom-select"
                        value={quantity === 0 ? cart.qty : quantity}
                        onChange={(e) => {
                          // call the method add to cart which locate in folder of action file is cartAction.js
                          dispatch(addToCart(cart.product, e.target.value));
                          setQuantity();
                        }}
                      >
                        {/* Make the Items open acordding to the countIn stack  */}
                        {[...Array(cart.countInStock).keys()].map((x) => (
                          <option key={x + 1} value={x + 1}>
                            {x + 1}
                          </option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {cartItems.length !== 0 ? (
            <>
              <div className="cart-total">
                <h1
                  style={{
                    fontSize: '22px',
                    fontWeight: 600,
                    
                    lineHeight: '19.6px',
                  }}
                >
                  Cart Total
                </h1>
                <div className="d-md-flex d-sm-block justify-content-between">
                  <p>Subtotal</p>
                  <p>
                    $
                    {cartItems.reduce(
                      (a, c) => a + Number(c.price) * Number(c.qty),
                      0
                    )}
                  </p>
                </div>
                <div
                  style={{
                    width: '100%',
                    height: '2px',
                    background: '#ccc',
                    margin: '10px 0',
                  }}
                ></div>
                <div className="row">
                  <div className="col-md-4">
                    <p>shipping</p>
                  </div>
                  <div
                    className="col-md-4"
                    style={{ fontSize: '14px', fontWeight: 700 }}
                  >
                    {' '}
                    Shipping Rate: ${parseFloat(sum).toFixed(2)}
                  </div>
                  <div className="col-md-4">
                    shipping to <strong>{country}</strong>
                  </div>
                </div>
              </div>

              <div className="d-flex justify-content-between p-3" style={{border:'2px #ccc solid'}}>
              
                <p>Total</p>  
                <p>
                  $
                  {totalPrices &&
                    parseFloat(Number(itemsPrice) + Number(sum)).toFixed(2)}
                </p>
              </div>

              <div className="text-center mt-2 mb-4"style={{border:'2px #fff solid'}} >
                <button
                  onClick={proccessPayment}
                  className="text-center btn btn-outline-warning" style={{backgroundColor:'#c15538'}}
                >
                  Check out
                </button>
              </div>
            </>
          ) : (
            <h1 className="text-center mt-4 mb-4">
              Please Add item then come back
            </h1>
          )}
        </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default AddCart;
