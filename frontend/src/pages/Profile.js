import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import {
  Dialog,
  Button,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Tooltip,
  TextField,
  Snackbar,
} from '@material-ui/core';
import { Edit, Visibility } from '@material-ui/icons';
import { Alert } from '@material-ui/lab';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import { listMyOrders } from '../actions/orderActions';
import { update } from '../actions/userActions';

const Profile = () => {
  // Edit details form
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setContry] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUsername] = useState('');
  const [phone, setPhone] = useState('');

  // newPassword state
  const [passwordOpen, setPasswordOpen] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassowrd] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Modal open
  const [open, setOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  // snackbar
  const [snackbarOpen, setSnackbarOpen] = useState(false);

  // take information of the state
  const userSignin = useSelector((state) => state.userSignin);
  // destruturing variable
  const { orders, loading } = useSelector((state) => state.myOrderList);
  //  ready t6he disptach function in action
  const dispatch = useDispatch();
  // destruturing variable
  const { userInfo } = userSignin;

  useEffect(() => {
    // dispatch function in folder of action file orderAction.js
    dispatch(listMyOrders());

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userSignin]);

  const handleClickOpen = () => {
    setFirstName(userInfo.firstName);
    setLastName(userInfo.lastName);
    setEmail(userInfo.email);
    setAddress(userInfo.address);
    setUsername(userInfo.username);
    setContry(userInfo.country);
    setPhone(userInfo.phone);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClosePassowrd = () => {
    setPasswordOpen(false);
  };

  const handleCloseSnackbar = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setSnackbarOpen(false);
  };

  const submitUpdatedData = (e) => {
    const updateUser = {
      firstName: firstName,
      lastName,
      email,
      username,
      phone,
      address,
      country,
    };

    dispatch(update(updateUser));
    setOpen(false);
    e.preventDefault();
  };

  const handlePasswordOpen = () => {
    setPasswordOpen(true);
  };

  const updatePassword = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmPassword) {
      setError(true);
      setPasswordOpen(true);
      setErrorMessage('password not match');
    } else {
      try {
        await axios.put(
          '/api/v1/auth/updatepassword',
          { currentPassword, newPassword },
          {
            headers: {
              Authorization: `Bearer ${userInfo.token}`,
            },
          }
        );
        setPasswordOpen(false);
        setNewPassowrd('');
        setConfirmPassword('');
        setCurrentPassword('');
        setSnackbarOpen(true);
        setErrorMessage('');
        setError(false);
      } catch (err) {
        setPasswordOpen(true);
        setError(true);
        setErrorMessage(err.response.data.error);
      }
    }
  };

  const orderClose = () => {
    setOrderOpen(false);
  };

  const handleModelOpen = () => {
    setOrderOpen(true);
  };

  console.log(orders);

  return (
    <div>
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
      <div className="container" style={{paddingTop:'80px'}}>
   
        <div className="text-center profile" style={{paddingBottom:'60px',fontFamily:'Playball'}}>
          <IconButton onClick={handleClickOpen}>
            <Tooltip title="Edit the user details">
              <Edit color="primary" />
            </Tooltip>
          </IconButton>
          <h2>
           Full Name: {userInfo.firstName} {userInfo.lastName}
          </h2>
          <h3>Email: {userInfo.email}</h3>
          <h4>Username: {userInfo.username}</h4>
          <h5>Country: {userInfo.country}</h5>
          <button onClick={handlePasswordOpen} className="main-btn mt-3" style={{marginRight:'165px'}}>
            Change password
          </button>
        </div>
      </div>
      <div className="container mb-5" style={{fontFamily:'Lato'}}>
        {loading ? (
          <h1>Loading...</h1>
        ) : (
          <table className="table table-striped mt-3">
            <thead>
              <tr>
                <th scope="col">Order Id</th>
                
                <th scope="col">Price</th>
                <th scope="col">Paid</th>
                <th scope="col">Delivery Satatus</th>
                <th scope="col">Order Details</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((item, index) => (
                <tr key={index + 1}>
                  <th scope="row">{item._id}</th>
                  <td>
                    {parseFloat(
                      Number(item.itemsPrice) + Number(item.shippingPrice)
                    ).toFixed(2)}
                  </td>
                  <td>
                    {item.isPaid ? (
                      <Link
                        to={`/order/${item._id}`}
                        className="btn btn-success"
                      >
                        Paid 
                      </Link>
                    ) : (
                      <Link
                        className="btn btn-sm btn-warning"
                        to={`/order/${item._id}`}
                      >
                        Not Paid
                      </Link>
                    )}
                  </td>
                  <td>{item.isDelivered}</td>
                  <td>
                    <IconButton onClick={handleModelOpen}>
                      <Visibility color="action" />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Edit the Details</DialogTitle>
        <DialogContent>
          <TextField
            style={{ margin: 10 }}
            variant="outlined"
            label="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <TextField
            style={{ margin: 10 }}
            variant="outlined"
            label="last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />

          <TextField
            style={{ margin: 10 }}
            variant="outlined"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <TextField
            style={{ margin: 10 }}
            variant="outlined"
            label="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            style={{ margin: 10 }}
            variant="outlined"
            label="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <TextField
            style={{ margin: 10 }}
            variant="outlined"
            label="country"
            value={country}
            onChange={(e) => setContry(e.target.value)}
          />
          <TextField
            style={{ margin: 10 }}
            variant="outlined"
            label="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={submitUpdatedData} color="primary">
            Update Details
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={passwordOpen} onClose={handleClosePassowrd}>
        <DialogTitle>Change Passowrd</DialogTitle>
        <DialogContent>
          {error && (
            <Alert variant="filled" severity="error" style={{ width: '100%' }}>
              {errorMessage}
            </Alert>
          )}
          <TextField
            style={{
              display: 'block',
              width: '100%',
              marginBottom: 12,
              marginTop: 12,
            }}
            variant="outlined"
            type="password"
            label="current Password"
            value={currentPassword}
            onChange={(e) => setCurrentPassword(e.target.value)}
          />
          <TextField
            style={{ display: 'block', width: '100%', marginBottom: 12 }}
            variant="outlined"
            type="password"
            label="new Password"
            value={newPassword}
            onChange={(e) => setNewPassowrd(e.target.value)}
          />
          <TextField
            style={{ display: 'block', width: '100%', marginBottom: 12 }}
            variant="outlined"
            type="password"
            label="confirm new Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClosePassowrd} color="primary">
            Cancel
          </Button>
          <Button onClick={updatePassword} color="primary">
            Update Password
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert onClose={handleCloseSnackbar} severity="success">
          Password Updated
        </Alert>
      </Snackbar>
      <Dialog open={orderOpen} onClose={orderClose}>
        <DialogTitle>
          <h1>Order Details</h1>
        </DialogTitle>
        <DialogContent>
          {orders &&
            orders.map((order) => (
              <React.Fragment key={order._id}>
                <h3>Order Item</h3>
                <table className="table table-striped mt-3">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">image</th>
                      <th scope="col">product</th>
                      <th scope="col">Qunatity</th>
                      <th scope="col">price</th>
                    </tr>
                  </thead>
                  <tbody>
                    {order.orderItems.map((item, index) => (
                      <tr key={index + 1}>
                        <th scope="row">{index + 1}</th>
                        <td>
                          <img
                            src={`${item.image}`}
                            width="90"
                            height="90"
                            alt=""
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>{item.qty}</td>
                        <td>{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                <h3 className="mt-3 mb-2">Payment</h3>
                <h6>Payment getway: {order.payment.paymentMethod}</h6>
                <h3 className="mt-3 mb-2">Shipping</h3>
                <p>City {order.shipping.city}</p>
                <p>Address: {order.shipping.address}</p>
                <p>Postal Code: {order.shipping.postalCode}</p>
                <p>Country {order.shipping.country}</p>
              </React.Fragment>
            ))}
        </DialogContent>
        <DialogActions>
          <Button onClick={orderClose} color="primary">
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
      <Footer />
    </div>
  );
};

export default Profile;
