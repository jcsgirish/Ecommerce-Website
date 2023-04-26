import React,{Fragment} from "react";

const Items = ({products}) => {

  return (
  <Fragment>
      {products.map(product => (
        <div key={product.title}>

           <h3>{product.title}</h3>
           <img src ={product.imageUrl} alt={product.title} />
           <p> Price: {product.price}</p>
        </div>
      ))}
  </Fragment>
  )};

export default Items;