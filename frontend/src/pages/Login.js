import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Snackbar } from '@material-ui/core';
import { Alert } from 'reactstrap';

import { signin } from '../actions/userActions';

import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

const Login = (props) => {
  // Form State
  const [email, setEmail] = useState('');
  const [open, setOpen] = useState(false);
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState(true);

  // selct the user info from redux
  const userSignin = useSelector((state) => state.userSignin);
  //  ready the dispatch to dispatch the function
  const dispatch = useDispatch();

  // destructuring the variable
  const { loading, userInfo, error } = userSignin;

  // react lifecycle
  useEffect(() => {
    if (userInfo) {
      props.history.push('/');
    }

    setOpen(true);
    return () => {
      //
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userInfo]);

  // Mean that close the message
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  // submit the data
  const submitData = (e) => {
    setVisible(true);
    e.preventDefault();
    dispatch(signin(email, password));
  };

  // dismis  the alert
  const onDismiss = () => {
    setVisible(false);
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
      <section className="login">
        <div className="overlay-login">
          <div className="container">
            <div className="login-grid">
              <div className="login-flex">
                {loading && <h1>Loading</h1>}
                {error && (
                  <Alert color="danger" isOpen={visible} toggle={onDismiss}>
                    {error}
                  </Alert>
                )}
                <form>
               
                  <div className="form-group">
                  <h2 className="log" style={{textAlign:'center',color:'#c15538',fontWeight:'bold',marginBottom:'30px'}}>Login Form</h2>
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input
                      type="password"
                      className="form-control"
                      id="password"
                      name="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      aria-describedby="emailHelp"
                    />
                  </div>
                  <button
                    type="submit"
                    className="btn btn-outline-warning1 btn-block"  style={{marginRight:'100px'}}
                    onClick={submitData}
                  >
                    {' '}
                    Login
                  </button>
                </form>
                <p className="mt-4 text-dark">
                  Don't you  have an account?{' '}
                  <Link className="text-warning1" to="/register" style={{color:'#c15538',fontWeight:'bold'}}>
                    Sign Up
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success">
          You Login SuccessFully
        </Alert>
      </Snackbar> */}
    </>
  );
};

export default Login;
