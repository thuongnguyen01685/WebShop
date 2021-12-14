import React, { useContext, useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productitem/ProductItem";

export default function DetailProduct() {
  const params = useParams();
  const state = useContext(GlobalState);
  const [products] = state.productsAPI.products;
  const [detailProduct, setDetailProduct] = useState([]);
  const addCart = state.userAPI.addCart;

  useEffect(() => {
    if (params.id) {
      products.forEach((product) => {
        if (product._id === params.id) setDetailProduct(product);
      });
    }
  }, [params.id, products]);

  console.log(detailProduct);
  if (detailProduct.length === 0) return null;
  return (
    <>
      <div className="detail">
        <img src={detailProduct.images.url} alt="" />
        <div className="box-detail">
          <div className="row">
            <h2>{detailProduct.title}</h2>
            <h6>#id: {detailProduct.product_id}</h6>
          </div>
          <div className="rowPrice">
            <div className="through">${detailProduct.price * 1.3}</div>
            <div className="tealPrice">
              <span className="teal">$</span>
              <span className="teall">{detailProduct.price}</span>
            </div>
          </div>
          <p>{detailProduct.description}</p>
          <p>{detailProduct.content}</p>
          <p>Sold: {detailProduct.sold}</p>
          <Link
            to="/cart"
            className="cart"
            onClick={() => addCart(detailProduct)}>
            Buy Now
          </Link>
        </div>
      </div>
      <div>
        <h2>Related products</h2>
        <div className="products">
          {products.map((product) => {
            return product.category === detailProduct.category &&
              product._id !== params.id ? (
              <ProductItem key={product._id} product={product} />
            ) : null;
          })}
        </div>
      </div>
    </>
  );
}
