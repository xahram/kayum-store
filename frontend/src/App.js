import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Register from './pages/Register';
import ProductsConfirm from './pages/ProduvtsConfirm';
import PlaceOrder from './pages/PlaceOrder';
import Payment from './pages/Payment';
import CompleteOrder from './pages/CompleteOrder';
import Profile from './pages/Profile';
import SingleProducts from './pages/SingleProduct';
import FAQ from './pages/FAQ';
import PrivacyPolicy from './pages/PrivacyPolicy';
import termscondition from './pages/termscondition';
import PayOrder from './pages/PayOrder';
import About from './pages/About';
import AddCart from './components/AddCart';
import { amber } from '@material-ui/core/colors';

axios.defaults.baseURL = '';

// main entery point this app
function App() {
  const userSignin = useSelector((state) => state.userSignin);
  const { userInfo } = userSignin;
  const theme = createMuiTheme({
    palette: {
      primary: {
        main: amber[600],
      },
    },
    overrides: {
      MuiBackdrop: {
        root: {
          backgroundColor: 'rgba(0, 0, 0, 0.95)',
        },
      },
    },
  });
  return (
    // All the Routes of the webiste
    <ThemeProvider theme={theme}>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/addtocart" component={AddCart} />
          <Route exact path="/products/single/:id" component={SingleProducts} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faq" component={FAQ} />
          <Route exact path="/privacypolicy" component={PrivacyPolicy} />
          <Route exact path="/termscondition" component={termscondition} />
          <Route  
            exact
            path="/order/:id"
            component={userInfo ? PayOrder : Login}
          />
          <Route
            exact
            path="/paymentconfirm"
            component={userInfo ? ProductsConfirm : Login}
          />
          <Route
            exact
            path="/placeorder"
            component={userInfo ? PlaceOrder : Login}
          />
          <Route exact path="/payment" component={userInfo ? Payment : Login} />
          <Route
            exact
            path="/completeOrder"
            component={userInfo ? CompleteOrder : Login}
          />
          <Route exact path="/profile" component={userInfo ? Profile : Login} />
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;
