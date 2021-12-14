import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import ProductItem from "../utils/productitem/ProductItem";
import Loading from "../utils/loading/Loading";
import axios from "axios";
import Filter from "./Filter";
import LoadMore from "./LoadMore";

export default function Products() {
  const state = useContext(GlobalState);
  const [products, setProducts] = state.productsAPI.products;
  const [isAdmin] = state.userAPI.isAdmin;
  const [token] = state.token;
  const [callback, setCallback] = state.productsAPI.callback;
  const [loading, setLoading] = useState(false);
  const [isCheck, setIsCheck] = useState(false);

  const deleteProduct = async (id, public_id) => {
    try {
      setLoading(true);
      const destroyImg = axios.post(
        "/api/destroy",
        { public_id },
        {
          headers: { Authorization: token },
        }
      );
      const deleteProducts = await axios.delete(`/api/products/${id}`, {
        headers: { Authorization: token },
      });
      await destroyImg;
      await deleteProducts;
      setCallback(!callback);
      setLoading(false);
    } catch (err) {
      alert(err.res.data.msg);
    }
  };
  const handleCheck = (id) => {
    products.forEach((product) => {
      if (product._id === id) product.checked = !product.checked;
    });
    setProducts([...products]);
  };
  const checkAll = () => {
    products.forEach((product) => {
      product.checked = !isCheck;
    });
    setProducts([...products]);
    setIsCheck(!isCheck);
  };
  const deleteAll = () => {
    products.forEach((product) => {
      if (product.checked) deleteProduct(product._id, product.images.public_id);
    });
    setLoading(false);
  };
  if (loading)
    return (
      <div>
        <Loading />
      </div>
    );
  return (
    <>
      <Filter />
      {isAdmin ? (
        <div className="delete-all">
          <span>Select</span>
          <input type="checkbox" checked={isCheck} onChange={checkAll} />
          <button onClick={deleteAll}>Delete All</button>
        </div>
      ) : null}
      <div className="products">
        {products.map((product) => {
          return (
            <ProductItem
              key={product._id}
              product={product}
              isAdmin={isAdmin}
              deleteProduct={deleteProduct}
              handleCheck={handleCheck}
            />
          );
        })}
      </div>
      <LoadMore />
      {products.length === 0 && <Loading />}
    </>
  );
}
