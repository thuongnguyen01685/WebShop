import React, {useState, useEffect} from 'react';
import axios from 'axios';

export default function ProductsAPI() {
    const [products, setProducts] = useState([]);
    
    const getProducts = async() =>{
        const res = await axios.get('/api/products');
        setProducts(res.data.products);
    };
    useEffect(() =>{
        getProducts();
    }, []);

    return {
        products: [products, setProducts]
    };
}
