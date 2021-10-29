import React from "react";
import { useEffect, useState } from "react";
import "./Product.css";
import Basket from "../basilsComponents/Basket";


  //----------→ COMPONENT SECTION ----------→
  //----------→ Meant to contain all logic for component
const Product = ({bket, sbket}) => {
  const [productItem, setProductItem] = useState([]);
  const [data, setData] = useState("");
  const apiKey = "ca70e52c-2990-4050-a666-5e2e97cb5784";
  
  useEffect(() => {
    GetProduct();
  }, []);
  

  //----------→ FETCH SECTION ----------→
  //----------→ Meant to get a random cat from an API
  const GetProduct = () => {
    console.log("Run");
    fetch("https://api.thecatapi.com/v1/images/search?limit=10", {
      headers: {
        "x-api-key": apiKey,
      },
    })
      .then((res) => res.json())
      .then((cats) => {
        for (let i = 0; i < cats.length; i++) {
          const cat = cats[i];
          cat.price = 100;
          cat.name = "Cat";
        }
        setProductItem(cats);
        console.log(cats);
      })
      .catch((error) => {
        console.log("Error: ", error);
      });
  };

  const basketHandler = (cat) => {
    console.log("In 'basketHandler', bket is: "+ bket)
    let tempArr = bket;
    tempArr.push(cat);
    sbket(tempArr) //shorthand calls from app
    
  };

  return (

    <div className="product-container">
      <div className="image-container">
        {/* map through the productitems, pass 'product' and the index of the new array... */}
      {productItem.map((product, index) => (
          <>
          {/* create an image from the API url, also alt text if it fails to load... */}
          <img src={product.url} alt={product.name} />

          {/* Pass the JSX name of the product */}
            <div className="product.Name">{product.name}</div>

          {/* Pass the JSX name of the product */}
            <div className="product.Price">£{product.price}</div>

            <button onClick={() => basketHandler(product)}>Add to Basket</button>
            
          </>
        ))}
      </div>

    </div>
  );
};

export default Product;