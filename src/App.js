import {  useState,useContext  } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Layout/Footer';
import Heading from './Components/Layout/Layout/Head';
import MusicContent from './Components/Layout/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';
import CartProvider from './Store/CartProvider';
import { cartContext } from './Store/CartProvider';

import { BrowserRouter,Redirect, Route, Switch } from 'react-router-dom';

import Contact from './Components/Pages/Contact';
import About from './Components/Pages/About';
import Home from './Components/Pages/Home';
import HeaderContent from './Components/Layout/Layout/HeadContent';

import Login from './Components/Pages/Login';
import Product from './Components/Pages/Product';
import ProductDetail from './Components/Pages/Productdetail';

function App() {
  const [showCart, setShowCart] = useState(false);

  const CartCtx = useContext(cartContext);





  const handleToggleCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  return (
    <CartProvider>
    <BrowserRouter>
   
      {showCart && <Cart handleToggleCart={handleToggleCart} />}
    

        <Navbar handleToggleCart={handleToggleCart} />
        <Route path="/" exact>
          <HeaderContent/>
        <Home/>
        </Route>

        <Switch>

          <Route path ="/home">
          <HeaderContent/>
          <Home/>
          </Route>

          <Route path="/store" >
            <Heading />
            <MusicContent handleToggleCart={handleToggleCart} />
          </Route>

          <Route path="/about">
            <Heading />
            <About/>
          </Route>

          <Route path="/contact">
            <Heading />
            <Contact/>
          </Route>
          <Route exact path='/products'>
          {CartCtx.isLoggedIn ? <Product /> : <Redirect to='/login'/>} 

          </Route>

          <Route exact path="/login">
          <Login />
          </Route>

          <Route exact path='/products/:productId'>
          <ProductDetail />
        </Route>


          </Switch>
        <Footer />
       
      
   
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;