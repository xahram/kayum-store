import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { savePayment } from '../actions/cartActions';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { Link } from 'react-router-dom';

const Payment = (props) => {
  // set payment state
  const [paymentMethod, setPaymentMethod] = useState('paypal');
  // ready the dispatch function action folder
  const dispatch = useDispatch();
  // history for changing the routes
  const history = useHistory();

  // submit the paymentv
  const handlePayment = (e) => {
    history.push('/completeOrder');
    e.preventDefault();
    // dispatch the payment in folder of action file orderAction.js
    dispatch(savePayment({ paymentMethod }));
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
        <div className="shipping-flex1" style={{paddingBottom:'20rem', paddingTop:'3rem'}}>
        
          <div className="card p-3" style={{ width: '20rem',height:'15rem',backgroundColor:'#fff'}}>
            <form>
              <div className="form-group" style={{backgroundColor:'#fff'}}>
              <h3>Payment Method</h3>
                <label htmlFor="address">Choose Payment Method</label>
                <select
                  className="custom-select"
                  value={paymentMethod}
                  onChange={(e) => {
                    setPaymentMethod(e.target.value);
                    console.log(paymentMethod);
                  }}
                >
                  <option value="paypal">Paypal</option>
                  <option value="bank">Bank</option>
                </select>
                <button
                onClick={handlePayment}
                className="btn btn-warning btn-block"
              >
                Payment
              </button>
              </div>

          
            </form>
            
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Payment;
