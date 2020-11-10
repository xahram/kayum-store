import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {
  Button,
  IconButton,
  Slide,
  Menu,
  MenuItem,
  Dialog,
  Badge,
  Fade,
} from '@material-ui/core';
import ScrollToTop from 'react-scroll-to-top';
import { AccountCircle, Search } from '@material-ui/icons';

import { searchProducts } from '../../actions/productActions';
import { logout } from '../../actions/userActions';
import mainLogo from '../../image/gob1.png';

const Navbar = (props) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setsortOrder] = useState('');
  const dispatch = useDispatch();
  // getting the user inifo
  const userSignin = useSelector((state) => state.userSignin);
  // destructure the variables
  const { userInfo } = userSignin;
  // get Prodyct List
  const productSearch = useSelector((state) => state.productSearch);
  // destructuring the variable
  const { products } = productSearch;

  // cart selector
  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  // open the many on mobile
  const openMenu = () => {
    document.querySelector('#sidebar').classList.add('show');
  };
  // close the many on mobile
  const closeMenu = () => {
    document.querySelector('#sidebar').classList.remove('show');
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleCloseModel = () => {
    setOpen(false);
    setSearchKeyword('');
    setsortOrder('');
  };

  // Search the products
  const handleChange = (e) => {
    if (e.target.name === 'price') {
      setsortOrder(e.target.value);
      dispatch(searchProducts('', '', e.target.value));
    }

    if (e.target.name === 'search') {
      setSearchKeyword(e.target.value);
      dispatch(searchProducts('', e.target.value, ''));
    }
  };

  return (
    <>
      <div className="conatiner pt-1 pb-1 d-flex">
        <button onClick={openMenu} className="btn btn-toogle">
          <i className="fa fa-bars fa-2x"></i>
        </button>
        <div>
          <Link>
            <img
              className="img-nav"
              src={mainLogo}
              width="200"
              height="200"
              alt=""
            />
          </Link>
        </div>
      </div>
      <nav id="sidebar">
        <div className="container">
          <button onClick={closeMenu} className="btn btn-pos">
            <i className="fas fa-window-close fa-2x"></i>
          </button>
          <div className="grid">
            <div className="main-logo">
              <Link href="/">
                <img src={mainLogo} alt="logo" />
              </Link>
            </div>
            <ul style={{fontFamily: 'Roboto'}}>
              <li>
                <NavLink activeClassName="active-nav" to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-nav" to="/shop">
                  Shop
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-nav" to="/about">
                  About</NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-nav" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink activeClassName="active-nav" to="/faq">
                  FAQ
                </NavLink>
              </li>
            </ul>
            
            <div className="items mt-2">
              <Link className="mr-3" to="/addtocart">
                <Badge badgeContent={cartItems.length} color="primary">
                  <i className="fas fa-cart-plus"></i>
                </Badge>
              </Link>
              <IconButton onClick={handleClickOpen}>
                <Search color="action" />
              </IconButton>
              <>
                <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
                >
                  <AccountCircle />
                </Button>

                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  //  TransitionComponent={Fade}
                >
                  <MenuItem onClick={handleClose}>
                  
                    <Link
                      style={{
                        color: '#333',
                        border: 'none',
                        marginTop:20,fontFamily:'Playball'
                                              
                      }}
                      to={userInfo ? '/profile' : '/login'}
                    >
                      {userInfo ? 'Profile' : 'Login'}
                    </Link>
                  </MenuItem >
                  {!userInfo && (
                    <MenuItem onClick={handleClose}> 
                      <Link
                        style={{ color: '#333', border: 'none',marginTop:20,fontFamily:'Playball'}}
                        to="/register"
                      >
                        Register
                      </Link>
                    </MenuItem>
                  )}
                  {userInfo && (
                    <MenuItem onClick={() => dispatch(logout())}>
                      Logout
                    </MenuItem>
                  )}
                </Menu>
              </>
            </div>
          </div>
        </div>
      </nav>

      {/* search coding */}

      <Dialog
        open={open}
        onClose={handleCloseModel}
        TransitionComponent={Transition}
        aria-labelledby="form-dialog-title"
      >
        <>
          <div className="search-flex">
            <select
              className="search-select"
              name="price"
              value={sortOrder}
              onChange={handleChange}
              id="price"
            >
              <option value="">Newest</option>
              <option value="lowest">Lowest</option>
              <option value="highest">Highest</option>
            </select>
            <input
              type="text"
              name="search"
              value={searchKeyword}
              onChange={handleChange}
              placeholder="Search"
              className="search-input"
            />
            <button className="btn">
              <i className="fas fa-search"></i>
            </button>
          </div>
          <div className="container">
            {products.length === 0
              ? null
              : products.map((product) => (
                  <React.Fragment key={product._id}>
                    <div className="d-flex justify-between mt4">
                      <img
                        className="m-3"
                        src={`/${product.image}`}
                        width="50"
                        height="50"
                        alt=""
                      />
                      <div className="mt-3">
                        <h6>
                          <Link to={`/products/single/${product._id}`}>
                            {product.name}
                          </Link>
                        </h6>
                        <p>${product.price}</p>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
          </div>
        </>
      </Dialog>

      {/* whatsapp coding */}

      <Link
        to="#"
        onClick={() =>
          (window.location =
            "https://wa.me/+94770483779?text=I'm%20interested%20in%20your%20car%20for%20sale")
        }
        className="float"
        target="_blank"
      >
        <i className="fab fa-whatsapp my-float"></i>
      </Link>

      {/* up arrow */}
      <ScrollToTop className="float-scroll" smooth color="#fff" />
    </>
  );
};

export default Navbar;

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
