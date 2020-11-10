import React, { useState } from 'react';
import axios from 'axios';
import { Snackbar } from '@material-ui/core';
import { Alert } from '@material-ui/lab';
import Map from './google/Map';

const ContactUs = () => {
  // Set states for process form
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneno, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const [open, setOpen] = useState(false);

  // Submit the message
  const submitMessage = async (e) => {
    e.preventDefault();
    try {
      // Post message to server
      await axios.post('/api/v1/message', { name, email, phoneno, subject, message });
      // empty the sate
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSubject('');
      setOpen(true);
    } catch (err) {
      console.log(err);
    }
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="text-center mb-lg-5" style={{fontFamily: 'Poppins'}}>
          <h1 className="hed"     style={{ color: ' #c15538' ,marginTop:'55px',fontFamily: 'Playball',fontWeight:'bold'}}>Contact us</h1>
          <p>
            Do you have any questions about our service?
          </p>
        </div>
        <div className="row">
          <div className="col-md-6 con">
            <form style={{fontFamily: 'Poppins'}}>
              {/* Message form */}
              <div className="form-group" style={{marginTop:'20px'}}> 
                <label htmlFor="name">Your Name * </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  aria-describedby="emailHelp"
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your name with anyone else.
                </small> */}
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email Address * </label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small>
              </div>


              <div className="form-group">
                <label htmlFor="phoneno">Your phone No</label>
                <input
                  type="String"
                  name="phoneno"
                  className="form-control"
                  id="phoneno"
                  value={phoneno}
                  onChange={(e) => setPhone(e.target.value)}
                  aria-describedby="emailHelp"
                />
                <small id="emailHelp" className="form-text text-muted">
                  We'll never share your phone no with anyone else.
                </small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Your Subject</label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  aria-describedby="emailHelp"
                />
                {/* <small id="emailHelp" className="form-text text-muted">
                  We'll never share your email with anyone else.
                </small> */}
              </div>
              <div class="form-group">
                <label htmlfor="message">Your Message</label>
                <textarea
                  class="form-control"
                  id="message"
                  rows="3"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>
              <button
                // Submit the form
                onClick={submitMessage}
                type="submit"
                className="btn btn-outline-warning1 btn-block" style={{marginRight:'100px'}}
              >
                {' '}
                Send Message
              </button>
            </form>
          </div>
          <div className="col-md-6 text-dark" style={{fontFamily: 'Poppins',color:'#000',textAlign:'center'}}>
            <h2 className="add" style={{color:'#c15538'}}>Contact Infomation</h2>
            <p>
            Kuyam is a business for pottery products. We design and produce lternatives to replace your daily life things with pottery products. You can purchase our products with good quality.
             </p>
  <br/>
            <p className="Address" style={{textAlign:'center'}}>
              <h3 style={{color:'#c15538'}}> ADDRESS</h3>
              <div class="contact-icon">
              <i class="fas fa-map-marker-alt"></i>
</div>
              
              <h6>Kuyam store,</h6>

<h6>Kodikamam,</h6>
<h6>Jaffna,</h6>
<h6>Sri Lanka.
</h6>
          

            </p>
            <br />
            
            <p className="mail" style={{textAlign:'center'}}>
              <h3 style={{color:'#c15538'}}>EMAIL</h3>
              <div class="contact-icon">
              <i class="far fa-envelope"></i>
              </div>
              <h6>info@kuyam.store</h6>
              <div class="contact-icon">
              <i class="fas fa-globe"></i>
              </div>
              <h6>www.kuyam.store</h6>
             </p>
             <br/>
             
             <p className="contactinfo" style={{textAlign:'center'}}>
               <h3 style={{color:'#c15538'}}>PHONE</h3>
               <div class="contact-icon">
               <i class="fas fa-phone"></i>
              </div>
               <h6>
                 +94 77 048 3779</h6>
                <h6> +94 75 586 9377
               </h6>
             </p>
          </div>
        </div>
        <div className="container py-lg-5">
          <div className="row">
            <div className="col">
              {/* Show Map */}
              {/* <Map /> */}
            </div>
          </div>
        </div>
      </div>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          Message is Submited, We connect soon by email
        </Alert>
      </Snackbar>
    </section>
  );
};

export default ContactUs;
