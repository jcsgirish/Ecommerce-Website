import { Fragment } from "react";
import { BsYoutube, BsSpotify, BsFacebook, BsInstagram } from "react-icons/bs";


const Footer = () => {
  return (
    <Fragment>
      <div className="p-1 bg-info text-white d-flex align-items-center ">
        <p style={{ fontSize: "3em", fontFamily: "bold", marginLeft: "25%" }}>
          The Generics
        </p>
        <BsYoutube style={{ marginLeft: "40%" }} size={36} />
        <BsSpotify style={{ marginLeft: "2%" }} size={36} />
        <BsFacebook style={{ marginLeft: "2%" }} size={36} />
        <BsInstagram style ={{marginLeft: "2%"}} size ={36} />
      </div>
    </Fragment>
  );
};

export default Footer;