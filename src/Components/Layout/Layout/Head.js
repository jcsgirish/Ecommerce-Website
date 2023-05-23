
import { Fragment,useContext} from "react";

import NavBar from "../Navbar";
import classes from './Head.module.css';
import HeaderCartButton from "./HeadCartbutton";
import LoginContext from "../../../Store/LoginContext";



const Heading = (props) => {
const authCtx=useContext(LoginContext)


  

  return (
    <Fragment>
      <header className={classes.header}>
        
      {authCtx.isLoggedIn&& <HeaderCartButton onClick={props.onShowCart} />}
      <NavBar />
      
        <h1 className={classes.h1}>The Generics</h1>
      </header>
      
    </Fragment>
  );
};
export default Heading;