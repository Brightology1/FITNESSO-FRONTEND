import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect } from "react";
import { FavoriteButton } from "../../services/FavoriteButton";
import "./ViewProduct.css";

const ViewProduct = () => {
  const [product, setProduct] = useState({});
  const [productId, setProductId] = useState(0);
  const [index, setIndex] = useState();;
  const url = "http://localhost:9067/product/";

  useEffect(() => {
    const id = localStorage.getItem("productId");
    setIndex();
    setProductId(id);
    getProductInfo();
  });

  const getProductInfo = async (e) => {
    const response = await fetch(`${url}${productId}`);
    const data = await response.json();
    setProduct(data);
  };

  return (
    <div>
      {product.quantity == null ? (
        <div className="item-view-container">
          <div className="details" key={product._id}>
          <FavoriteButton itemId={product.id} />
            <div className="big-img">
              <img src={product.image} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{product.productName}</h2>
                <span>${product.price}</span>
              </div>

              <p>
                Build your fitness with this training program. Workout focus: {product.description}
              </p>
              {/* <p>{item.content}</p> */}

              <button className="cart">Add to cart</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="item-view-container">
          <div className="details" key={product._id}>
            <div className="big-img">
              <img src={product.image} alt="" />
            </div>

            <div className="box">
              <div className="row">
                <h2>{product.productName}</h2>
                <span>${product.price}</span>
              </div>

              <p>
                A proper gear makes your fitness goals easy to keep up with. Get you own {product.description}
              </p>
              {/* <p>{item.content}</p> */}

              <button className="cart">Add to cart</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewProduct;
