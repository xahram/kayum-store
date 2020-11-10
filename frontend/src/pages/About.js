import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const About = () => {
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
        <div
          className="abo"
          id="About"
          
        >
          <div className="container" >
            <div className="intro">
              <h1
                className="text-center"
                style={{ color: ' #c15538' ,marginTop:'55px',fontFamily: 'Playball',fontWeight:'bold'}}
              >
                About us
              </h1>
              <br/>
              {/* <hr
                style={{
                  height: '2px',
                  color: '#214a80',
                  backgroundColor: '#172f76',
                }}
              />  */}
               <p
                className="text-justify"
                style={{ color: '#000', fontFamily: 'Poppins' ,fontSize:'18px'}}
              >
                I, Pratheepa S., am a full-stack web developer student living in Jaffna, Sri Lanka. Founder of the Kuyam store. My background is that I studied for my full-stack diploma at Uki. As a part of my final project at Uki, I was supposed to launch a startup idea so I decided to launch kuyam.store in Sep 2020 as an online platform that connects the producers of pottery products with potential customers.
<br /><br/>
                
                The mission is to empower traditionally manufactured Sri Lankan pottery products to the online market by connecting with millions of customers through educating and showing them all the health benefits of our products and also make it easy for them to buy from our online platform by the comfort of staying at home to their your doorstep by a click away option. 
<br/><br/>

Using plastic and metal and aluminum related cookware products are a real serious health risk to our health. We are in business and also intended to please customers to start cooking food in earthen pots for their own health benefits. 


              </p>
              <br/>
              <br/>
            </div>
            {/* <div className="buttons">
              <Link
                className="btn text-capitalize bounce animated"
                role="button"
                to="#"
                style={{
                  backgroundColor: '#ffb200',
                  color: '#ffffff',
                  fontFamily: 'Muli, sans-serif',
                  fontWeight: 300,
                  fontSize: '15px',
                }}
              >
                Our Team
                <br />
              </Link>
            </div> */}
          </div>
        </div>
        <div>
           <div className="container">
            <div className="row">
              <div className="col-md-12">
                <section className="card-section-imagia">
                  <h1 style={{ color: ' #c15538' ,marginTop:'55px',fontFamily: 'Playball',fontWeight:'bold'}}>Our team</h1>
                  <h2></h2>
                  <div className="container">
                    <div className="row">
                      <div className="col-sm-6 col-md-4">
                        <div className="card-container-imagia">
                          <div className="card-imagia">
                            <div className="front-imagia">
                              <div className="cover-imagia">
                                <img
                                  alt=""
                                  src="https://unsplash.it/720/500?image=1067"
                                />
                              </div>
                              <div className="user-imagia">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="https://cdn5.vectorstock.com/i/1000x1000/73/94/business-woman-works-on-his-laptop-vector-13247394.jpg"
                                />
                              </div>
                              <div className="content-imagia">
                                <h3 className="name-imagia">Pratheepa Sujeenthan</h3>
                                <p className="subtitle-imagia">Managing Director</p>
                                <p className="text-justify">
                                 
                                  I am a chief executive officer, or just chief executive, is the most senior corporate, executive, or administrative officer in charge of managing an organization

        
                                </p>
                              </div>
                              <div className="footer-imagia">
                                <span>
                                  <i className="fa fa-plus" /> More info
                                </span>
                              </div>
                            </div>
                            <div className="back-imagia">
                              <div className="content-imagia content-back-imagia">
                                <div>
                                  <h3 className="text-justify">About me</h3>
                                  <p className="text-justify">
                                  I am optimistic, innovative , task-oriented young professional seeking for challenges to utilize my knowledge, skills and abilities in the information technology industries. 
                                  Founder of the Kuyam store. My background is that I studied for my full-stack diploma at Uki. As a part of my final project at Uki, I was supposed to launch a startup idea so I decided to launch kuyam.store in Sep 2020 as an online platform that connects the producers of pottery products.
                                     </p>
                                </div>
                              </div>
                              <div className="footer-imagia">
                                <div className="social-imagia text-center">
                                  <Link to="#">
                                    <i className="fa fa-facebook" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> 
                      <div className="col-sm-6 col-md-4">
                        <div className="card-container-imagia">
                          <div className="card-imagia">
                            <div className="front-imagia">
                              <div className="cover-imagia">
                                <img
                                  alt=""
                                  src="https://unsplash.it/720/500?image=1067"
                                />
                              </div>
                              
                              <div className="user-imagia">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQHswkSPl4n2VTscXnezdro-ULXLohhbmdmbg&usqp=CAU"
                                />
                              </div>
                              <div className="content-imagia">
                                <h3 className="name-imagia">john Doe</h3>
                                <p className="subtitle-imagia">Marketing Officer</p>
                                <p className="text-justify">
                                
                                  
I am marketing Managers , research, determine, examine, and assess product demand in order to increase it by developing promotional campaigns and strategies.
                                
                                </p>
                              </div>
                              <div className="footer-imagia">
                                <span>
                                  <i className="fa fa-plus" /> More info
                                </span>
                              </div>
                            </div>
                            <div className="back-imagia">
                              <div className="content-imagia content-back-imagia">
                                <div>
                                  <h3 className="text-justify">About me</h3>
                                  <p className="text-justify">
                                  Over 5 years of experience in SaaS-based product marketing. Lead generation through digital marketing campaigns.

Specialist in search engine optimization (SEO), search engine marketing (SEM), content marketing, influencer marketing, content automation, campaign marketing, data-driven marketing, e-commerce marketing, social media marketing, social media optimization, e-mail direct marketing, display advertising.

Passionate to work with startups. 


                                 </p>
                                </div>
                              </div>
                              <div className="footer-imagia">
                                <div className="social-imagia text-center">
                                  <Link to="#">
                                    <i className="fa fa-facebook" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-sm-6 col-md-4">
                        <div className="card-container-imagia">
                          <div className="card-imagia">
                            <div className="front-imagia">
                              <div className="cover-imagia">
                                <img
                                  alt=""
                                  src="https://unsplash.it/720/500?image=1067"
                                />
                              </div>
                              <div className="user-imagia">
                                <img
                                  className="img-circle"
                                  alt=""
                                  src="https://cdn.dribbble.com/users/118246/screenshots/5343519/wifi.gif"
                                />
                              </div>
                              <div className="content-imagia">
                                <h3 className="name-imagia">Joe Christ</h3>
                                <p className="subtitle-imagia">Assistent</p>
                                <p className="text-justify" style={{textAlign:'justify'}}>
                            
                                I am a marketing assistant supports the work of marketing managers and executives on projects directed at maximizing company profits and developing sales or marketing campaigns.

                               
                                </p>
                              </div> 
                              <div className="footer-imagia">
                                <span>
                                  <i className="fa fa-plus" /> More info
                                </span>
                              </div>
                            </div>
                            <div className="back-imagia">
                              <div className="content-imagia content-back-imagia">
                                <div>
                                  <h3 className="text-justify">About me</h3>
                                  <p className="text-justify">
                                  Experienced Personal Assistant with a demonstrated history of working in the legal services industry. Skilled in Event Planning, Microsoft Excel, Microsoft Word, and Marketing Strategy. Strong administrative professional graduated from Methodist College, Colombo 3. 
                                     </p>
                                </div>
                              </div>
                              <div className="footer-imagia">
                                <div className="social-imagia text-center">
                                  <Link to="#">
                                    <i className="fa fa-facebook" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-linkedin" />
                                  </Link>
                                  <Link to="#">
                                    <i className="fa fa-twitter" />
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </section> 
              </div>
            </div> 
            <div className="row">
              <div className="col-md-12" />
            </div>
          </div> 
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
