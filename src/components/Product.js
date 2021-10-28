import React from "react";
import { useEffect, useState } from "react";
import "./Product.css";

const Product = () => {
  const [productItem, setProductItem] = useState([]);
  const apiKey = "ca70e52c-2990-4050-a666-5e2e97cb5784";

  useEffect(() => {
    GetProduct();
  }, []);

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

  return (
    <div className="display-board">
      {productItem.map((product) => (
        <div className="product-container">
          <div className="image-container">
            <img src={product.url} alt={product.name} />
          </div>
          <div className="product-content">
            <>
              <div className="product.Name">{product.name}</div>
              <div className="product.Price">£{product.price}</div>
            </>
          </div>
          <div className="btn">
        <button>
          <a>Add to Basket</a>
        </button>
      </div>
        </div>
      ))}
    </div>
  );
};

export default Product;