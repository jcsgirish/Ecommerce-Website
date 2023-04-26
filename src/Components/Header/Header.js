import {Fragment} from "react";
import {Nav, Navbar, Container,Button} from "react-bootstrap";

 const Header=()=>{
return(
<Fragment>
      <Navbar bg="dark" expand="sm" variant="dark">
        <Container className="justify-content-center">
          <Nav>
          <Nav.Item style={{ marginRight: "40px" }}>
            <Nav.Link href="/" style={{ color: "white" }}>
              Home
             </Nav.Link>
            </Nav.Item>

          <Nav.Item style={{ marginRight: "40px",}}>
          <Nav.Link href="/" style={{ color: "white" }}>
              Store
            </Nav.Link>
            </Nav.Item>
            <Nav.Item style={{ marginRight: "40px" }}>

            <Nav.Link href="/" style={{ color: "white" }}>
                About
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Container>
        <Button
          variant="outline-primary"
          style={{ marginRight: "15px" }}> 
          Cart
        </Button>  
        </Navbar>
        <p
        className="display-5 text-center p-3 bg-secondary mt-1 text-white"
        style={{ fontSize: "6em", fontFamily: "bold" }}>
        The Generics
        </p>
        </Fragment>
)};
export default Header;