import React from "react";
import BtnRender from "./BtnRender";

export default function ProductItem({
  product,
  isAdmin,
  deleteProduct,
  handleCheck,
}) {
  return (
    <div className="product_card">
      {isAdmin && (
        <input
          type="checkbox"
          checked={product.checked}
          onChange={() => handleCheck(product._id)}
        />
      )}
      <img src={product.images.url} alt="" />
      <div className="product_box">
        <h2 title={product.title}>{product.title}</h2>
        <div className="rowPrice">
          <div className="through">
            ${parseFloat(product.price * 1.3).toFixed(2)}
          </div>
          <div className="tealPrice">
            <span className="teal">$</span>
            <span className="teall">{product.price}</span>
          </div>
        </div>
        <p>{product.description}</p>
      </div>
      <BtnRender product={product} deleteProduct={deleteProduct} />
    </div>
  );
}
