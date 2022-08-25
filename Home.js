import React from 'react';
import { useRef } from 'react';
import { useState } from 'react';

import Card from '../UI/Card/Card';
import classes from './Home.module.css';

const DUMMY_DATA = [
  {
    id: 1,
    name: "Sweater",
    description: "Highly effetive winter appreal which works even in Alaska",
    price: 250,
    image: "https://m.media-amazon.com/images/I/71NTRxfV1vL._UX569_.jpg"
  },
  {
    id: 2,
    name: "Grroming Kit",
    description: "Glam up like never on the red carpet",
    price: 120,
    image: "https://thumbs.dreamstime.com/b/men-grooming-kit-12039993.jpg"
  },
  {
    id: 3,
    name: "Shampoo",
    description: "Long and shiny hair which you have been dreaming for ever so long",
    price: 160,
    image: "https://thumbs.dreamstime.com/b/various-brands-shampoo-various-brands-shampoo-including-anti-dandruff-shampoo-192259470.jpg"
  },
];

const Home = (props) => {
  const [inputValue, setInputValue] = useState();
  const quantityRef = useRef();
  const quantityButtonClickHandler = () => {
    setInputValue(prev => +prev + 1);
    console.log(quantityRef.current);
  }
  // const callMe = (thor) => 
  //       {
  //           let getNumber = document.getElementById(`wandaOp`);
  //           if(thor.id == `plus`)
  //           {
  //               getNumber.value = parseInt(getNumber.value) + 1; 
  //           }
  //           else
  //           {
  //               getNumber.value = parseInt(getNumber.value) - 1; 
  //           }
  //       }

  return (
    <div>
      <h2 style={{ textAlign: "center" }}>Products</h2>
      <div style={{display: "flex", margin: "5rem", marginBottom: "0rem"}}>
        <p style={{flex:4 ,fontWeight: "bold"}}>Name</p>
        <p style={{flex:1, fontWeight: "bold"}}>Price</p>
        <p style={{flex:2, fontWeight: "bold"}}>Quantity</p>
      </div>

      {/* <div style={{ display: "flex", margin: "5rem" }}> */}
        {DUMMY_DATA.map(ele => 
          (
            <div style={{display: "flex", marginLeft: "5rem"}}>
              <div style={{ flex: 4}}>
                <div style={{display: "flex"}}>
                  <img src={ele.image} style={{ height: "100px", width: "100px"}}></img>
                  <div style={{display: "flex", flexDirection: "column"}}>
                  <p>{ele.name}</p>
                  <p>{ele.description}</p>
                  </div>
                </div>
              </div>
              <div style={{ flex: 1 }}>
                <p>{ele.price}</p>
              </div>
              <div style={{ flex: 2 }}>
                <button id="plus" onClick={quantityButtonClickHandler} style={{backgroundColor: '#2c2c2c' ,color:'white' }}>+</button>
                <input type="number" id="wandaOp" value={inputValue} ref={quantityRef} />
                <button id="minus" onClick={quantityButtonClickHandler} style={{backgroundColor: '#2c2c2c' ,color:'white' }}>-</button>
              </div>
            </div>
          )
        )}
      {/* </div> */}
      <br />
      <div style={{textAlign: "center", marginLeft: "31rem"}}>
        Total : {"750"}
      </div>
    </div>
  );
};

export default Home;
