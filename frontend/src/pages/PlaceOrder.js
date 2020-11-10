import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { saveShipping } from '../actions/cartActions';
import { Link } from 'react-router-dom';

const PlaceOrder = () => {
  // Shippng form state
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [postalCode, setPostalCode] = useState('');
  const [country, setCountry] = useState('');
  const [netCountry, setNetCountry] = useState('');
  // history is push new routes
  const history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    getCountry();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCountry = async () => {
    const data = await axios.get('http://ip-api.com/json');
    setNetCountry(data.data.country);
  };

  // submit the shipping
  const handleShipping = (e) => {
    // stop default work of form
    e.preventDefault();
    //dispatch the dertailsOrdes in action folder file cartAction
    const check = country === '' ? netCountry : country;
    dispatch(saveShipping({ address, city, postalCode, country: check }));
    //  push new routes
    history.push('/payment');
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
        <div className="shipping-flex">

          <div className="card p-3" style={{ width: '18rem' }}>
            <form>
              <div className="form-group">
              <h3>Shipping Address</h3>
              
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  className="form-control"
                  id="Address"
                  name="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="city">City</label>
                <input
                  type="text"
                  className="form-control"
                  id="city"
                  name="city"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="postcode">Postal Code</label>
                <input
                  type="text"
                  className="form-control"
                  id="postcode"
                  name="pastcode"
                  value={postalCode}
                  onChange={(e) => setPostalCode(e.target.value)}
                  aria-describedby="emailHelp"
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country</label>
                <select
                  type="text"
                  className="form-control"
                  id="country"
                  name="country"
                  aria-describedby="emailHelp"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                >
                  <option value="no_countries">Choose Country</option>
                  <option value="Sri Lanka">Sri Lanka</option>
                  <option value="india">India</option>
                  <option value="Canada">Canada</option>
                  <option value="America">America</option>
                  <option value="London">London</option>
                  <option value="France">France</option>
                  <option value="German">German</option>
                  <option value="Swiss">Swiss</option>
                  <option value="Australia">Australia</option>
                </select>
              </div>
              <div
                onClick={handleShipping}
                className="btn btn-warning btn-block"
              >
                Place Order
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PlaceOrder;
