import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Layout/Footer';
import Heading from './Components/Layout/Layout/Head';
import MusicContent from './Components/Layout/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';
import CartProvider from './Store/CartProvider';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/Pages/About';

function App() {
  const [showCart, setShowCart] = useState(false);
  const handleToggleCart = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  }

  return (
    <CartProvider>
      {showCart && <Cart handleToggleCart={handleToggleCart} />}
      <BrowserRouter>
        <Navbar handleToggleCart={handleToggleCart} />
        <Switch>
          <Route path="/" exact>
            <Heading />
            <MusicContent handleToggleCart={handleToggleCart} />
          </Route>
          <Route path="/about">
            <Heading />
            <About/>
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;