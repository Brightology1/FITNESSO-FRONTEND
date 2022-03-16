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
        <div key={item.id} className="hp_product_item">
          <div className="view_products_wrapper">
            <a className="search__container" href={`/product/item`}>
              <span>
                <img className="hp_product_image" src={item.image} />
              </span>
              <span className="prod_title">{item.productName}</span>
              {/* <span className="search__description">{item.description}</span> */}
              <span className="prod_price">₦ {item.price}</span>
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductShuffler;
