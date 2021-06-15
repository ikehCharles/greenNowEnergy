import React from "react";
import { Link } from "react-router-dom";
import { product } from "../appCrendentials";

export default function ProductHome() {
  return (
    <div className="productHome">
      <div className="productHome-wrapper">
        <div className="productHome-header">
          <h2>{product.homeTitle}</h2>
        </div>
        <div className="productHome-body">
          {product.productHome.map((product) => (
            <div key={product.link} className="productHome-product">
              <div className="productHome-imgWrapper">
                <img src={product.img} alt={product.name} />
              </div>
              <div className="productHome-product-body">
                <h3>{product.name}</h3>
                <h4>{product.price}</h4>
                <div className="description">
                  <h4>Description</h4>
                  <p>{product.description}</p>
                </div>
              </div>
              <div className="controls">
                <Link className="draw-borders left">i</Link>
                <Link className="draw-borders right">ii</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
