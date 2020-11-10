import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="main-footer" >
      <div className="container">
        <div className="row">
          <div className="col-md-4 mb-5">
            <h2 className="footer-text text-center text-warning"></h2>
            <p className="text-left text">
            
              <Link to="/" className="text-warning">
                <h2>Quick link</h2>
              </Link>{' '}
          
             <Link className="text-white-50" to="/">
             <h5> Home{ ' '}  </h5>
              </Link>{' '}
          
         <Link className="text-white-50" to="/shop">
         <h5>     Shop  {' '}  </h5>
              </Link>{' '}
        
       <Link className="text-white-50" to="/FAQ">
       <h5>   FAQ {' '} </h5>
              </Link>{' '}
          
          <Link className="text-white-50" to="/About">
          <h5>  About{' '} </h5>
              </Link>{' '}
           
            </p>
          </div>
          <div className="col-md-4 mb-5">
            <h2 className="footer-text text-center text-warning"></h2>
            <p className="text-center text-dark">
            <Link to="/contact" className="text-warning">
                <h2>Contact us{' '}</h2>
              </Link>{' '}
              <h5>
              <i className="fas fa-mobile-alt"></i> +94 77 048 3779
              </h5>
            </p>
            <p className="text-center text-dark">
            <h5>
              <i className="fas fa-envelope-open-text"></i> info@kuyam.store
              </h5>
              <h5>
              We open 24/7
              </h5>
            </p>
            <p className="text-center text-dark">
            
              <div className="social">
              <h5>
            <i class="fab fa-facebook"></i>
            <i class="fab fa-instagram"></i>
            <i class="fab fa-youtube"></i>
            </h5>
            </div>
           
            </p>
               </div>

          <div className="col-md-4 mb-5">
            <h2 className="footer-text text-center text-warning">
              
            </h2>
            <p className="text-left text-dark mb-5">
          
              <Link to="/" className="text-warning">
               <h2>Legal</h2>
              </Link>{' '}
             
           <Link className="text-white-50" to="/termscondition">
           <h5>Terms Condition {' '}  </h5>
              </Link>{' '}
         
              <Link className="text-white-50" to="/PrivacyPolicy">
              <h5> Privacy policy {' '} </h5>
              </Link>{' '}
          
                       <h5>
               legal@kuyam.store
              </h5>
              {/* <i className="fas fa-envelope-open-text"></i> */}
            </p>
          </div>
         
        </div>
      </div>
      <section className="faq1">
        <div className="container">
          <div className="faq-flex1" >
            <h5>Copyright © 2020 Kuyam.store - All Rights Reserved.</h5>
           
          </div>
        </div>
  </section>
    </footer>
    
  );
};

export default Footer;
