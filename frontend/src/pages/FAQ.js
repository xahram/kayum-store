import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const FAQ = () => {
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

      <section className="faq-q pt-5 ob-5"style={{fontFamily:'Playball'}}>
        <div className="container">
          
          <h1 className="faq-text" style={{textAlign:'center',marginBottom:'45px',color:'#c15538',fontFamily:'Playball'}}>
          Get your Answer Here!


  </h1>
          <div className="row mt-3">
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* Can you deliver to abroad countries? </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px'}}>
              Yes, kuyam store exports all of our products to other countries like USA, Canada & Uk , France  And tries to expand to other countries as well.
   </p>
   <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
              Do we allow  OEM  to any of our products?
              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px'}}>
              Yes, we can make it in your logo. Please ask us before by mail.
      </p>
      <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
              I live in out of Sri Lanka. How to pay the money to order?

              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              Follow the shipping cart, you will have options to pay by PayPal or credit card or over Sri Lankan bank or wire transfer.
  </p>
  <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
              Do you deliver to my door? 

              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              Yes  </p>
              <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
              Do you accept cancellation?
              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              Yes before we shipped to a third-party delivery service.
              </p>
              <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
               
              Do you accept return?


              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              yes with a 30% restocking fee and plus two-way shipping cost. </p>
              <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
               
              Do you open 24 hours a day?


              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              Nope, our office will be from 9 am to 4 pm Monday to Friday, Sri Lankan time.  you can use our self-service online platform. 
 </p>
 <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
               
              Do you have any warranties for your products?


              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              At this moment we don’t provide any warranties.  </p>
              <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
               
              Do we have to pay tax?


              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              yes if applicable  </p>
              <br/>
            </div>
            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
              How do we contact you ?  

              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
               by email, phone, what’s app.  </p>
              <br/>
            </div>

            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
              Within how many days do I have to return any items?


              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              15 days
 </p>
 <br/>
            </div>

            <div className="col-md-6">
              <h4 className="text-bold" style={{color:'#30120a',fontWeight:'bold'}}>* 
              
What do I do if products were damaged during the delivery    process? 

              </h4>
              <p className="text" style={{color:'#000',paddingLeft:'15px',fontSize:'18px'}}>
              Please do not accept and contact us immediately.  </p>
              <br/>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default FAQ;
