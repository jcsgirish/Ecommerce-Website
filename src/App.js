import { useState } from 'react';
import Cart from './Components/Cart/Cart';
import Footer from './Components/Layout/Layout/Footer';
import Heading from './Components/Layout/Layout/Head';
import MusicContent from './Components/Layout/Layout/MusicContent';
import Navbar from './Components/Layout/Navbar';
// import CartContext from './Components/Store/CartContext';
import CartProvider from './Store/CartProvider';


function App() {
  const [showCart,setShowCart]=useState(false);
  const handleToggleCart=()=>{
    if(showCart){
      setShowCart(false);
    }else{
      setShowCart(true);
    }
  }
  return (
    <CartProvider>
      {showCart && <Cart handleToggleCart={handleToggleCart}/>}
      <Navbar handleToggleCart={handleToggleCart}/>
      <Heading/>
      <MusicContent handleToggleCart={handleToggleCart}/>
      <Footer/>
    </CartProvider>
  );
}

export default App;