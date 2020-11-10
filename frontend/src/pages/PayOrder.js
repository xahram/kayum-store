import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { detailsOrder, payOrder } from '../actions/orderActions';
import PaypalButton from '../components/PaypolButton';
import Footer from '../components/layout/Footer';
import Navbar from '../components/layout/Navbar';

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

const PayOrder = () => {
  // eslint-disable-next-line
  const [country, setCountry] = useState('');
  // payorder state in redux
  const orderPay = useSelector((state) => state.orderPay);
  // destructuring the data
  const { loading: loadingPay, success: successPay } = orderPay;

  const cart = useSelector((state) => state.cart);

  // destructuring variable
  const { cartItems } = cart;

  const itemsPrice = cartItems.reduce((a, c) => a + c.price * c.qty, 0);

  // ready dispatch to dispatch the events
  const dispatch = useDispatch();
  // history to new routes
  const history = useHistory();
  // params to get th id from url
  const params = useParams();

  useEffect(() => {
    if (successPay) {
      history.push('/profile');
    } else {
      // dispatch the dertailsOrdes in action folder file orderaCtion
      dispatch(detailsOrder(params.id));
    }
    getCountry();
    return () => {};
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [successPay]);

  const getCountry = async () => {
    const data = await axios.get('http://ip-api.com/json');
    setCountry(data.data.country);
  };

  // submit the payment
  const handleSuccessPayment = (paymentResult) => {
    // dispatch the dertailsOrdes in action folder file orderaCtion
    dispatch(payOrder(order, paymentResult));
    console.log('working..');
  };

  // get the state from redux store
  const orderDetails = useSelector((state) => state.orderDetails);
  // destructuring
  const { loading, order, error } = orderDetails;

  const orderCountry = order && order.shipping.country;

  let calculatedPrice;
  const value = countryShippingPrices.findIndex(
    (item) => item.name === orderCountry
  );

  const newValue = countryShippingPrices[value];

  let prices;
  let allPrice = [];
  let sum = 0;
  if (newValue !== undefined) {
    calculatedPrice = newValue.price;

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
  }

  allPrice.map((item) => {
    sum = sum + item;
    return sum;
  });
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
      <div>
     <section className="last-messge">
        <div className="container">
          <div className="last-me" style={{fontFamily:'Playball'}}>
            <h3>Thank you For Your Order.Please Make Your Payment Now.

</h3>
<br/>
<br></br>
            {/* <p>
            Your order will not be shipped until the payment has cleared in our account or paypal account.
Once your payment is confirmed. We will ship your order within 7-10 days via DHL and provide a order number by send message via whatsapp or email after shipped.
            </p>
            <br></br>
           <div className="bank">
            <pre>
            <h3>Bank Details</h3>
            <h4>     Bank                                                    Account Number</h4>
          <h5>    NSB Bank                                                              000123456789</h5>
            </pre>
            </div> */}
          </div>     
        </div>
  </section> 
      </div>
      {loading ? (
        <div>Loading ...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div>
          <div className="placeorder">
            <div className="placeorder-info"  style={{fontFamily:'Playball'}}>
              <div>
                <h2>Shipping Informaition</h2>
                <div>
                  {order.shipping.address}, {order.shipping.city},
                  {order.shipping.postalCode}, {order.shipping.country},
                </div>
                <div>
                  {order.isDelivered
                    ? 'Delivered at ' + order.deliveredAt
                    : 'Not Delivered.'}
                </div>
              </div>
              <div>
                <h2>Payment</h2>
                <div>Payment Method: {order.payment.paymentMethod}</div>
                <div>
                  {order.isPaid ? 'Paid at ' + order.paidAt : 'Not Paid.'}
                </div>
              </div>
              <div className="ship">
                <ul className="cart-list-container" style={{marginRight:'500px'}}>
                  <li>
                    <h2>Shopping Cart</h2 >
                    {/* <div>Price</div> */}
                  </li>
                  {order.orderItems.length === 0 ? (
                    <div>Cart is empty</div>
                  ) : (
                    order.orderItems.map((item) => (
                      <li key={item._id}>
                        <div className="cart-image">
                          <img
                            width="90"
                            height="90"
                            src={`/${item.image}`}
                            alt="product"
                          />
                        </div>
                        <div className="cart-name">
                          <div>
                            <Link to={'/products/single/' + item.product}>
                              {item.name}
                            </Link>
                          </div>
                          <div>Qty: {item.qty}</div>
                        </div>
                        <div className="cart-price">${item.price}</div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
            <div className="placeorder-action" style={{paddingBottom:'20rem', paddingTop:'4rem'}}>
              <ul>
                <div className="row">
                  <div className="col">
                    <li className="placeorder-actions-payment">
                      {loadingPay && <div>Finishing Payment...</div>}
                      {!order.isPaid && (
                        <PaypalButton
                          amount={parseFloat(
                            Number(itemsPrice) + Number(sum)
                          ).toFixed(2)}
                          onSuccess={handleSuccessPayment}
                        />
                      )}
                      <Link to="/profile">Go Back</Link>
                    </li>
                  </div>
                  <div className="col">
                    <li>
                      <h3>Order Summary</h3>
                    </li>
                    <li>
                      <div>Items</div>
                      <div>${order.itemsPrice}</div>
                    </li>
                    <li>
                      <div>Shipping</div>
                      <div>${parseFloat(sum).toFixed(2)}</div>
                    </li>
                    <li>
                      <div>Order Total</div>
                      <div>${Number(sum) + Number(order.itemsPrice)}</div>
                    </li>
                  </div>
                </div>
              </ul>
            </div>
          </div>
          <Footer />
        </div>
      )}
    </>
  );
};

export default PayOrder;
