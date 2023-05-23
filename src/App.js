import React, { Fragment, useState,useContext,useEffect,Suspense} from "react";
import axios from "axios";
import { Route,Redirect } from "react-router-dom";
import Heading from "./Components/Layout/Layout/Head";
import Footer from "./Components/Layout/Layout/Footer";

import CartProvider from "./Store/CartProvider";
import LoginContext from "./Store/LoginContext";
import CartContext from "./Store/CartContext";
import Cart from "./Components/Cart/Cart";

const  About=React.lazy(()=> import(  "./Components/Pages/About"));
const  Home2 = React.lazy(()=> import ( "./Components/Pages/Home2"));
const Store=React.lazy(()=>import('./Components/Pages/Store'));
const Contact=React.lazy(()=>import('./Components/Pages/Contact'));
const LoginForm = React.lazy(()=> import ( "./Components/Pages/Login"));
const  ProductDetail=React.lazy(()=> import ("./Components/Pages/Productdetail"));


function App() {

  if(!localStorage.getItem('email')) {
    localStorage.setItem("email","")
  }

  const authCtx = useContext(LoginContext);
  const cartCtx = useContext(CartContext);
  let email = localStorage.getItem("email").replace(".", "").replace("@", "");


  const [cartIsShown, setCartIsShown] = useState(false);

  const ShowCartHandler = () => {
    setCartIsShown(true);
  };

  const HideCartHandler = () => {
    setCartIsShown(false);
  };

  useEffect(() => {
    if (!email) return;
     axios.get(`https://crudcrud.com/api/bda76a1b86d740c08246ce47251d1a17/Cart${email}`).then((res) => {
      
       const data= (res.data)
       for (const key in data) {
         const item = data[key];
         item._id = key;
         cartCtx.mapID(item)
       }
       
     }).catch((err) => {
       alert(err)
     })
   }, [email, cartCtx])

  return (
    <Fragment>
      
      <CartProvider>
        
        {cartIsShown && <Cart onClose={HideCartHandler} />}
        <Heading onShowCart={ShowCartHandler} />
        
        <Suspense>
        <Route path="/" exact>
        <Redirect to="/Login" />
        </Route>

        <Route path="/About">
          <About />
        </Route>

        <Route path="/Home">
          <Home2 />
        </Route>

        <Route path="/Store">
       {authCtx.isLoggedIn&&<Store></Store>}
       {!authCtx.isLoggedIn&&  <Redirect  to = "/Login"></Redirect>}
       
        </Route>

        <Route path="/Contact">
          <Contact />
        </Route>

        <Route path="/products/:product_id">
            <ProductDetail />
          </Route>

       <Route path="/Login" exact>
        <LoginForm/>
        {!authCtx.isLoggedIn && <Redirect to='/Login'/>}
        </Route>
        </Suspense>
        

        <Footer />
      </CartProvider>
    </Fragment>
  );
}

export default App;



