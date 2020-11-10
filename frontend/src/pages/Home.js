import React from 'react';
import { Link } from 'react-router-dom';
import Showcase from '../components/Showcase';
import Products from '../components/Products';
import Navbar from '../components/layout/Navbar';
import PhotoSection from '../components/PhotoSection';
import Footer from '../components/layout/Footer';
import { colors } from '@material-ui/core';
import { blue } from '@material-ui/core/colors';

const Home = () => {
  return (
    <>
    {/* <section className="faq">
        <div className="container">
          <div className="faq-flex">
             <h1>Kuyam.Store</h1>
            <p>
              <Link className="text-white-50" to="/">
              <i class="fas fa-home" style={{color:'#fff',fontSize:'30px'}}></i>
              </Link>{' '}
              
            </p> 
            
          </div>
        </div>
      </section> */}
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
       

      <Showcase />
      <Products />
      <PhotoSection />
      <Footer />
    </>
  );
};

export default Home;
