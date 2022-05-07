import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const useProducts = () => {
    const { productId } = useParams()
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const url = `http://localhost:5000/service/${productId}`;
        fetch(url)
        .then(res => res.json())
        .then(data => setProducts(data));
}, []);
return [products, setProducts]
};

export default useProducts;