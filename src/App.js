import React from 'react'
import './App.css';
import {Button} from 'react-bootstrap'
import Header from './NavBar/Header';

const  App=()=> {

      const productsArr = [

{

title: 'Colors',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',

},

{

title: 'Black and white Colors',

price: 50,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',

},

{

title: 'Yellow and Black Colors',

price: 70,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',

},

{

title: 'Blue Color',

price: 100,

imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',

}

]

return(
 
  <>
   <Header></Header>
  <ul>{productsArr.map((item,i)=>(
        <li key={i}>
         <h3>{item.title}</h3>
         <h3>${item.price}</h3>
        <img src={item.imageUrl} ></img>
        <Button>Add To Cart</Button>
        </li>
      ))}</ul>
  </>
)
}

export default App;
