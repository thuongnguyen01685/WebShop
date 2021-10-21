import React, {useContext} from 'react';
import {GlobalState} from '../../../GlobalState';
import ProductItem from '../utils/productitem/ProductItem';

export default function Products() {
    const state = useContext(GlobalState);
    const [products] = state.ProductsAPI.products;
    console.log(state);
    return (
        <div className="products">{
            products.map(product => {
                return <ProductItem key={product._id} product={product}/>
            })
        }
        </div>
        
    )
}
