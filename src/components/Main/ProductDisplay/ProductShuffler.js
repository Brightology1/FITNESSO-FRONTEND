import React, { useState, useEffect } from "react";
import axios from "axios";
import "./shuffle.css";
import { Card } from "@mui/material";
import fisherShuffle from "./Shuffler";

function ProductShuffler() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const loadPosts = async () => {
      setLoading(true);
      const response = await axios.get(
        "https://fitnesso-app-new.herokuapp.com/product/viewproducts"
      );
      //const response = await axios.get("http://localhost:9067/product/viewproducts");
      const newData = fisherShuffle(response.data).slice(0, 6);
      setProducts(newData);
      console.log(response.data);
      setLoading(false);
    };
    loadPosts();
  }, []);

  return (
    <div className="hp_product_card_wrapper">
      {products?.map((item) => (
        <div key={item.id} className="search__box">
              <div className="search_products_wrapper">
                <a className="search__container" href={`/cart`}>
                  <span className="search__image">
                     <img src={item.image}/>

                  </span>
                  <span className="search__name">{item.productName}</span>
                  {/* <span className="search__description">{item.description}</span> */}
                  <span className="search__price">₦ {item.price}</span>
                </a>
              </div>
              </div>
      ))}
    </div>
  );
}

export default ProductShuffler;
